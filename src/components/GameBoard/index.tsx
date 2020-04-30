import React, { useState } from 'react';
import styled from 'styled-components';
import produce from 'immer';
import { useParams } from 'react-router-dom';

import { EventType, SelectedTile, Tile } from '../../models';

import * as MatchService from '../../services/match';

import BoardTile from './BoardTile';
import Toolbar from './Toolbar';
import useMatch from "../../hooks/useMatch";

const Container = styled.div`
    display: inline-block;
    margin: 2rem auto;
`;

const BoardRowContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

type BoardRowProps = {
    pieces: Tile[];
    rowIndex: number;
    selectedTile: SelectedTile;
    onClick: (row: number, col: number) => void;
};

const BoardRow = ({ pieces, rowIndex, selectedTile, onClick }: BoardRowProps) => {
    const [selectedRowIndex, selectedColIndex] = selectedTile === null ? [-1, -1] : selectedTile;

    return (
        <BoardRowContainer>
            {pieces.map((piece, colIndex) => (
                <BoardTile
                    alternate={(rowIndex + colIndex + 1) % 2 == 0}
                    key={colIndex}
                    piece={piece}
                    selected={rowIndex === selectedRowIndex && colIndex === selectedColIndex}
                    onClick={() => onClick(rowIndex, colIndex)}
                />
            ))}
        </BoardRowContainer>
    );
};

const GameBoard = () => {
    const [selectedTile, setSelectedTile] = useState<SelectedTile>(null);
    const { matchId } = useParams();
    const gameState = useMatch(matchId);

    const handleClick = async (rowIndex: number, colIndex: number) => {
            const updatedState = produce(gameState, (draft) => {
                if (selectedTile !== null) {
                    // Move piece: set previous location to Empty, then overwrite new location with Piece
                    const [oldRowIndex, oldColIndex] = selectedTile;

                    if (oldRowIndex === rowIndex && oldColIndex === colIndex) {
                        // Clicked on same spot twice: reset selection
                        setSelectedTile(null);
                        return;
                    }

                    draft.board[rowIndex][colIndex] = draft.board[oldRowIndex][oldColIndex];
                    draft.board[oldRowIndex][oldColIndex] = 'E';

                    setSelectedTile(null);
                } else {
                    if (draft.board[rowIndex][colIndex] !== 'E') {
                        setSelectedTile([rowIndex, colIndex]);
                    }
                }
            });

            await MatchService.update(matchId, updatedState.board);
    };

    const handleEvent = async (type: EventType) => {
        const updatedState = produce(gameState, (draft) => {
            switch (type) {
                case EventType.ADD_B_PIECE: {
                    for (let i = 0; i < draft.board.length; i++) {
                        for (let j = 0; j < draft.board[i].length; j++) {
                            if (draft.board[i][j] === 'E') {
                                draft.board[i][j] = 'B';
                                return;
                            }
                        }
                    }
                }

                    break;
                case EventType.ADD_R_PIECE: {
                    for (let i = 0; i < draft.board.length; i++) {
                        for (let j = 0; j < draft.board[i].length; j++) {
                            if (draft.board[i][j] === 'E') {
                                draft.board[i][j] = 'R';
                                return;
                            }
                        }
                    }
                }

                    break;
                case EventType.KING_SELECTED: {
                    if (selectedTile === null) {
                        return;
                    }

                    const [selectedRow, selectedCol] = selectedTile;
                    const selectedPiece = draft.board[selectedRow][selectedCol];

                    if (selectedPiece.includes('K')) {
                        return;
                    }

                    draft.board[selectedRow][selectedCol] = (selectedPiece + 'K') as Tile;
                }

                    break;
                case EventType.REMOVE_SELECTED: {
                    if (selectedTile === null) {
                        return;
                    }

                    const [selectedRow, selectedCol] = selectedTile;
                    draft.board[selectedRow][selectedCol] = 'E';

                    setSelectedTile(null);
                }
            }
        });

        await MatchService.update(matchId, updatedState.board);
    };

    return (
        <Container>
            <Toolbar onEvent={handleEvent} />

            {gameState.board.map((row, rowIndex) => (
                <BoardRow
                    key={rowIndex}
                    pieces={row}
                    rowIndex={rowIndex}
                    selectedTile={selectedTile}
                    onClick={handleClick}
                />
            ))}
        </Container>
    );
};

export default GameBoard;

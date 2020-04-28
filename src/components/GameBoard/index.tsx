import React, { useState } from 'react';
import styled from "styled-components";

import { GameState, Tile } from "../../models";

const EXAMPLE_STATE: GameState = {
    board: [
        ['E', 'R', 'E', 'R', 'E', 'R', 'E', 'R'],
        ['R', 'E', 'R', 'E', 'R', 'E', 'R', 'E'],
        ['E', 'R', 'E', 'R', 'E', 'R', 'E', 'R',],
        ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',],
        ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',],
        ['B', 'E', 'B', 'E', 'B', 'E', 'B', 'E',],
        ['E', 'B', 'E', 'B', 'E', 'B', 'E', 'B',],
        ['B', 'E', 'B', 'E', 'B', 'E', 'B', 'E',],
    ]
};

const Container = styled.div`
  
`;

const BoardRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const BoardTileContainer = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
`;

const BoardTileBackground = styled.div<{ alt?: boolean }>`
  width: 100%;
  border: 1px solid black;
  
  background-color: ${({ alt }) => alt ? 'black' : 'white'};
`;

const BoardTileForeground = styled.div`
  width: 100%;
  margin-left: -100%;
  
  display: flex;
  justify-content: center;
  align-items: center; 
`;

const MyWhiteBorder = 'border: 5px dashed white;';

const BoardTilePiece = styled.div<{ player: string, selected: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  
  background-color: ${({ player }) => player === 'R' ? 'red' : 'lightblue'};
  
  ${({selected}) => selected ? MyWhiteBorder : ''}
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

// For displaying King'd pieces
const BoardTilePieceEnhanced = styled.div<{ player: string }>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  
  border: 1px solid black;
  background-color: ${({ player }) => player === 'R' ? 'red' : 'lightblue'};
`

const BoardTile = ({ alt, piece, selected, onSelected }: { alt: boolean, piece: Tile, selected: boolean, onSelected: () => void }) => {
    let boardTilePiece;

    if (piece === 'E') {
        boardTilePiece = null;
    } else {
        const [player, isKing] = piece.split('');

        boardTilePiece = (
            <BoardTilePiece player={player}
                            onClick={onSelected}
                            selected={selected}>
                {isKing && <BoardTilePieceEnhanced player={player}/>}
            </BoardTilePiece>
        );
    }

    return (
        <BoardTileContainer>
            <BoardTileBackground alt={alt}/>
            <BoardTileForeground>
                {boardTilePiece}
            </BoardTileForeground>
        </BoardTileContainer>
    );
}


const GameBoard = () => {
    const [[selectedRowIndex, selectedColIndex], setSelected] = useState([-1, -1]);

    return (
        <Container>
            {EXAMPLE_STATE.board.map(
                (row, rowIndex) =>
                    <BoardRow key={rowIndex}>
                        {row.map(
                            (piece, colIndex) =>
                                <BoardTile alt={(rowIndex + colIndex + 1) % 2 == 0}
                                           key={colIndex}
                                           piece={piece}
                                           selected={rowIndex === selectedRowIndex && colIndex === selectedColIndex}
                                           onSelected={() => setSelected([rowIndex, colIndex])}/>
                        )}
                    </BoardRow>
            )}
        </Container>
    )
};

export default GameBoard;

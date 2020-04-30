import React from 'react';
import styled from 'styled-components';

import { Tile } from '../../../models';

const BoardTileContainer = styled.div`
    display: flex;
    width: 80px;
    height: 80px;
`;

const BoardTileBackground = styled.div<{ alternate: boolean }>`
    width: 100%;
    border: 1px solid black;

    background-color: ${({ alternate }) => (alternate ? 'black' : 'white')};
`;

const BoardTileForeground = styled.div`
    width: 100%;
    margin-left: -100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const SelectedPieceBorder = 'border: 5px dashed white;';

const BoardTilePiece = styled.div<{ player: string; selected: boolean }>`
    width: 40px;
    height: 40px;
    border-radius: 10px;

    background-color: ${({ player }) => (player === 'R' ? 'red' : 'lightblue')};

    display: flex;
    justify-content: center;
    align-items: center;

    ${({ selected }) => (selected ? SelectedPieceBorder : '')}
`;

// For displaying King'd pieces
const BoardTilePieceEnhanced = styled.div<{ player: string }>`
    width: 20px;
    height: 20px;
    border-radius: 10px;

    border: 1px solid black;
    background-color: ${({ player }) => (player === 'R' ? 'red' : 'lightblue')};
`;

type Props = {
    alternate: boolean;
    piece: Tile;
    selected: boolean;
    onClick: () => void;
};

const BoardTile = ({ alternate, piece, selected, onClick }: Props) => {
    let boardTilePiece;

    if (piece === 'E') {
        boardTilePiece = null;
    } else {
        const [player, isKing] = piece.split('');

        boardTilePiece = (
            <BoardTilePiece player={player} selected={selected}>
                {isKing && <BoardTilePieceEnhanced player={player} />}
            </BoardTilePiece>
        );
    }

    return (
        <BoardTileContainer onClick={onClick}>
            <BoardTileBackground alternate={alternate} />
            <BoardTileForeground>{boardTilePiece}</BoardTileForeground>
        </BoardTileContainer>
    );
};

export default BoardTile;

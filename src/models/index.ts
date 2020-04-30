export type Tile = 'R' | 'RK' | 'B' | 'BK' | 'E';

export type SelectedTile = [number, number] | null;

export enum EventType {
    ADD_R_PIECE,
    ADD_B_PIECE,
    REMOVE_SELECTED,
    KING_SELECTED,
}

export type GameState = {
    board: Tile[][];
};

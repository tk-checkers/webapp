import axios from 'axios';

import { GameState, Tile } from "../models";

export const update = async (matchId: string, board: Tile[][]) => {
    const payload = {
        board
    };

    await axios.patch(
        `${process.env.REACT_APP_API_URL}/api/matches/${matchId}/`,
        payload
    );
};

export const retrieve = async (matchId: string) => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/matches/${matchId}/`,
    );

    const gameState: GameState = {
        board: JSON.parse(response.data.board)
    };

    return gameState;
}

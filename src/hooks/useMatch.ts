import { useCallback, useEffect, useState } from "react";
import { useAsync } from "react-async";
import Echo from 'laravel-echo';

import { GameState } from "../models";

import * as MatchService from '../services/match';

const INITIAL_STATE: GameState = {
    board: [
        ['E', 'R', 'E', 'R', 'E', 'R', 'E', 'R'],
        ['R', 'E', 'R', 'E', 'R', 'E', 'R', 'E'],
        ['E', 'R', 'E', 'R', 'E', 'R', 'E', 'R'],
        ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
        ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
        ['B', 'E', 'B', 'E', 'B', 'E', 'B', 'E'],
        ['E', 'B', 'E', 'B', 'E', 'B', 'E', 'B'],
        ['B', 'E', 'B', 'E', 'B', 'E', 'B', 'E'],
    ],
};

const useMatch = (matchId: string): GameState  => {
    const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);

    // TODO: need to preload initial state
    const retrieveFn = useCallback(
        () => MatchService.retrieve(matchId),
        [matchId]
    );

    const { data, error, isLoading } = useAsync(retrieveFn);

    useEffect(
        () => {
            if (isLoading) {
                return;
            }

            setGameState(data!);
        },
        [isLoading, data]
    );

    // TODO return game state as set via sockets
    useEffect(
        () => {
            if (isLoading) {
                return;
            }

            const echo = new Echo({
                broadcaster: 'pusher',
                key: `${process.env.REACT_APP_PUSHER_KEY}`,
                cluster: 'us2',
                forceTLS: true
            });

            const channel = echo.channel(`matches.${matchId}`);

            channel.listen('MatchUpdated', ({match}: any) => {
               const gameState: GameState = {
                   board: JSON.parse(match.board)
               };

               setGameState(gameState);
            });

            return () => {
                channel.stopListening('MatchUpdated');
            }
        },
        [isLoading, matchId]
    );

    return gameState;
}

export default useMatch;

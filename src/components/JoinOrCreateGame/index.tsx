import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Container = styled.div`
    margin: 0 auto;
    max-width: 20rem;
`;

const MiniForm = styled.div`
    margin: 2rem 0;
`;

const JoinOrCreateGame = () => {
    const [gameId, setGameId] = useState<string>('');
    const history = useHistory();

    const navigate = useCallback(
        (id: string) => {
            history.push(`/match/${id}`);
        },
        [history],
    );

    const createGame = useCallback(() => {
        const id = uuidv4();
        navigate(id);
    }, [navigate]);

    const joinGame = useCallback(() => {
        navigate(gameId);
    }, [gameId]);

    return (
        <Container>
            <MiniForm>
                <label className="label">Join by Game ID</label>
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <input
                            className="input"
                            type="text"
                            placeholder="Game ID"
                            value={gameId}
                            onChange={(e) => setGameId(e.target.value)}
                        />
                    </div>
                    <div className="control">
                        <a className="button is-info" onClick={joinGame}>
                            Go
                        </a>
                    </div>
                </div>
                <p className="help">Ask your friend to share the Game ID with you!</p>
            </MiniForm>
            <MiniForm>
                <div className="field">
                    <label className="label">Create a New Game</label>
                    <button className="button is-fullwidth" onClick={createGame}>
                        Let's play!
                    </button>
                </div>
            </MiniForm>
        </Container>
    );
};

export default JoinOrCreateGame;

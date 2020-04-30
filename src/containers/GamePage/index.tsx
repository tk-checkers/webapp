import React from 'react';
import styled from 'styled-components';

import Page from '../../components/Page';
import GameBoard from '../../components/GameBoard';

const Container = styled.div`
    display: flex;
`;

const GamePage = () => (
    <Page>
        <Container>
            <GameBoard />
        </Container>
    </Page>
);

export default GamePage;

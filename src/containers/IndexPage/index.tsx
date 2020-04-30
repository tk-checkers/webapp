import React from 'react';
import styled from 'styled-components';

import Page from '../../components/Page';
import JoinOrCreateGame from '../../components/JoinOrCreateGame';

const Container = styled.div``;

const Message = styled.article`
    text-align: center;
    max-width: 20rem;
    margin: 2rem auto;
`;

const IndexPage = () => (
    <Page>
        <Container>
            <Message className="message">
                <div className="message-body">Play checkers with your friends, no sign-up required!</div>
            </Message>
            <JoinOrCreateGame />
        </Container>
    </Page>
);

export default IndexPage;

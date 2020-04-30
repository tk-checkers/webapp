import React from 'react';
import styled from 'styled-components';
import { FaAngleDoubleUp, FaMinusCircle, FaPlusCircle } from "react-icons/all";

import { EventType } from '../../../models';


const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

type Props = {
    onEvent: (e: EventType) => void;
};

const Toolbar = ({ onEvent }: Props) => (
    <Container>
        <div className="field has-addons">
            <p className="control">
                <button className="button" onClick={() => onEvent(EventType.ADD_B_PIECE)}>
                    <span className="icon is-small">
                        <FaPlusCircle />
                    </span>
                    <span>Add Blue Piece</span>
                </button>
            </p>
            <p className="control">
                <button className="button" onClick={() => onEvent(EventType.ADD_R_PIECE)}>
                    <span className="icon is-small">
                        <FaPlusCircle />
                    </span>
                    <span>Add Red Piece</span>
                </button>
            </p>
        </div>
        <div className="field has-addons">
            <p className="control">
                <button className="button" onClick={() => onEvent(EventType.REMOVE_SELECTED)}>
                    <span className="icon is-small">
                        <FaMinusCircle />
                    </span>
                    <span>Remove Selected</span>
                </button>
            </p>
            <p className="control">
                <button className="button" onClick={() => onEvent(EventType.KING_SELECTED)}>
                    <span className="icon is-small">
                        <FaAngleDoubleUp />
                    </span>
                    <span>King Selected</span>
                </button>
            </p>
        </div>
    </Container>
);

export default Toolbar;

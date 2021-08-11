import React, { useState } from 'react';
import { Edit2 } from 'react-feather';
import styled from 'styled-components';
import type { Item } from '../../types/graphql-generated';
import ItemEdit from './ItemEdit';
import ItemToggleDone from './ItemToggleDone';

export const SingleItemStyles = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin: 2px;

    &.done {
        border-color: var(--success-color);
    }

    > div {
        padding: 0 0 0 5px;
    }

    .quantity {
        color: var(--subtitle-color);
    }

    .submit {
        padding-top: 7px;
    }
`;

const SingleItem = ({ item }: { item: Item }): JSX.Element => {
    const [editMode, setEditMode] = useState(false);

    const readOnlyItem = (
        <SingleItemStyles
            className={`terminal-alert terminal-alert-primary ${
                item.done ? 'done' : ''
            }`}
        >
            <ItemToggleDone item={item} />
            <div className="quantity">
                <span className="quantity">{`${item.quantity}x `}</span>
            </div>
            <div>{item.title}</div>
            <div>
                {!item.done && (
                    <Edit2 onClick={() => setEditMode(true)} size="16" />
                )}
            </div>
        </SingleItemStyles>
    );

    const editableItem = (
        <SingleItemStyles className="terminal-alert terminal-alert-primary">
            <ItemEdit
                initialItem={item}
                listId={item.list?.id ?? ''}
                setEditMode={setEditMode}
            />
        </SingleItemStyles>
    );

    return editMode ? editableItem : readOnlyItem;
};

export default SingleItem;

import { gql } from '@apollo/client';
import React, { useState } from 'react';
import { Edit2, Save } from 'react-feather';
import styled from 'styled-components';
import { Item, useSaveItemMutation } from '../../types/graphql-generated';
import { CURRENT_USER_QUERY } from '../hooks/useUser';
import ItemEdit from './ItemEdit';

export const SingleItemStyles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 5px;

    > div {
        padding: 0 0 0 5px;
    }

    .quantity {
        color: var(--subtitle-color);
    }

    .submit {
        padding: 0 20px;
    }
`;

export const SAVE_ITEM_MUTATION = gql`
    mutation saveItem($id: ID!, $title: String!, $quantity: Int!) {
        updateItem(id: $id, data: { title: $title, quantity: $quantity }) {
            id
        }
    }
`;

const SingleItem = ({ item }: { item: Item }): JSX.Element => {
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState<string>(item.title ?? '');
    const [quantity, setQuantity] = useState<number>(item.quantity ?? 0);
    const [save, { loading, error, data }] = useSaveItemMutation({
        variables: {
            id: item.id,
            title,
            quantity,
        },
        refetchQueries: [
            {
                query: CURRENT_USER_QUERY,
            },
        ],
    });

    const handleSave = async () => {
        const res = await save();
        if (res?.data?.updateItem?.id) {
            setEditMode(false);
        }
    };

    // child component change handler
    const handleChange = (
        newQuantity: number,
        newTitle: string,
        triggerSave: boolean,
    ) => {
        setQuantity(Math.max(1, newQuantity));
        setTitle(newTitle);
        if (triggerSave) {
            handleSave();
        }
    };

    const readOnlyItem = (
        <SingleItemStyles className="terminal-alert terminal-alert-primary">
            <div className="quantity">
                <span className="quantity">{`${item.quantity}x `}</span>
            </div>
            <div>{item.title}</div>
            <div>
                <Edit2 onClick={() => setEditMode(true)} size="16" />
            </div>
        </SingleItemStyles>
    );

    const editableItem = (
        <SingleItemStyles className="terminal-alert terminal-alert-primary">
            <ItemEdit
                title={title ?? ''}
                quantity={quantity ?? 0}
                onChange={handleChange}
            />

            <div className="submit">
                <Save onClick={handleSave} />
            </div>
        </SingleItemStyles>
    );

    return editMode ? editableItem : readOnlyItem;
};

export default SingleItem;

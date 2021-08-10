import { gql } from '@apollo/client';
import React, { useState } from 'react';
import { Edit2 } from 'react-feather';
import styled from 'styled-components';
import {
    Item,
    ListByIdQuery,
    useDeleteItemMutation,
    useSaveItemMutation,
} from '../../types/graphql-generated';
import { CURRENT_USER_QUERY } from '../hooks/useUser';
import ItemEdit from './ItemEdit';
import { QUERY_LIST_BY_ID } from './SingleList';

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
        padding-top: 7px;
    }
`;

export const SAVE_ITEM_MUTATION = gql`
    mutation saveItem($id: ID!, $title: String!, $quantity: Int!) {
        updateItem(id: $id, data: { title: $title, quantity: $quantity }) {
            id
        }
    }
`;

export const DELETE_ITEM_MUTATION = gql`
    mutation deleteItem($id: ID!) {
        deleteItem(id: $id) {
            id
            list {
                id
            }
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
    const [
        deleteItem,
        { loading: deleteLoading, error: deleteError, data: deleteData },
    ] = useDeleteItemMutation({
        variables: {
            id: item.id,
        },
        refetchQueries: [
            {
                query: CURRENT_USER_QUERY,
            },
        ],
        update: (cache, payload) => {
            // deleted item references the list id
            const listId = payload.data?.deleteItem?.list?.id;
            // the deleted item's id
            const itemId = payload.data?.deleteItem?.id;
            // get the old list from cache
            const data = cache.readQuery<ListByIdQuery>({
                query: QUERY_LIST_BY_ID,
                variables: { id: listId },
            });
            if (data?.List?.items) {
                // purge the items with the deleted item's id
                const updatedList = data.List.items.filter(
                    ({ id }) => id !== itemId,
                );
                // write back to cache
                cache.writeQuery({
                    query: QUERY_LIST_BY_ID,
                    variables: { id: listId },
                    data: {
                        List: {
                            ...data.List,
                            items: updatedList,
                        },
                    },
                });
            }
        },
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

    const handleDelete = async () => {
        await deleteItem();
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
                onDelete={handleDelete}
                onSave={handleSave}
            />
        </SingleItemStyles>
    );

    return editMode ? editableItem : readOnlyItem;
};

export default SingleItem;

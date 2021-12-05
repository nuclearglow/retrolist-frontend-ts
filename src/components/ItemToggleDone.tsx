import { gql } from '@apollo/client';
import React from 'react';
import { CheckSquare, Square } from 'react-feather';
import { Item, useUpdateItemDoneMutation } from '../../types/graphql-generated';
import { ITEMS_BY_LIST_ID } from './SingleList';

export const UPDATE_ITEM_MUTATION = gql`
    mutation updateItemDone($id: ID!, $done: Boolean!) {
        updateItem(id: $id, data: { done: $done }) {
            id
        }
    }
`;

const ItemToggleDone = ({ item }: { item: Item }): JSX.Element => {
    const [updateItemDone, { loading, error, data }] =
        useUpdateItemDoneMutation();

    const handleToggle = async () => {
        await updateItemDone({
            variables: {
                id: item.id,
                done: !item.done,
            },
            refetchQueries: [
                {
                    query: ITEMS_BY_LIST_ID,
                    variables: {
                        id: item.list?.id,
                    },
                },
            ],
        });
    };

    const getIcon = (): JSX.Element => {
        if (item.done) {
            return <CheckSquare size={24} />;
        }
        return <Square size={24} />;
    };

    return (
        <button
            className={`btn btn-small btn-ghost ${
                item.done ? 'btn-success' : 'btn-primary'
            }`}
            onClick={handleToggle}
        >
            {getIcon()}
        </button>
    );
};

export default ItemToggleDone;

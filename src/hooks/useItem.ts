import { gql } from '@apollo/client';
import { useState } from 'react';
import {
    Item,
    ItemsByListIdQuery,
    useCreateItemMutation,
    useDeleteItemMutation,
    useUpdateItemMutation,
} from '../../types/graphql-generated';
import { ITEMS_BY_LIST_ID } from '../components/SingleList';
import { CURRENT_USER_QUERY } from './useUser';

export const UPDATE_ITEM_MUTATION = gql`
    mutation updateItem(
        $id: ID!
        $title: String!
        $quantity: Int!
        $done: Boolean!
    ) {
        updateItem(
            id: $id
            data: { title: $title, quantity: $quantity, done: $done }
        ) {
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

export const CREATE_ITEM_MUTATION = gql`
    mutation createItem(
        $title: String!
        $quantity: Int!
        $list: ListRelateToOneInput!
    ) {
        createItem(data: { title: $title, quantity: $quantity, list: $list }) {
            id
        }
    }
`;

export const useItem = (initialItem?: Item, listId?: string) => {
    const [item, setItem] = useState<Item>(
        initialItem || {
            id: '',
            title: '',
            quantity: 1,
            done: false,
        },
    );

    const [updateItem, { loading, error, data }] = useUpdateItemMutation({
        variables: {
            id: item.id,
            title: item.title ?? '',
            quantity: item.quantity ?? 1,
            done: item.done ?? false,
        },
        refetchQueries: [
            {
                query: CURRENT_USER_QUERY,
            },
        ],
    });

    const [
        createItem,
        { loading: createLoading, error: createError, data: createData },
    ] = useCreateItemMutation({
        variables: {
            title: item.title ?? '',
            quantity: item.quantity ?? 1,
            list: {
                connect: {
                    id: listId ?? '',
                },
            },
        },
        // optional: queries that will be re-fetched after the mutation
        refetchQueries: [
            { query: ITEMS_BY_LIST_ID, variables: { id: listId } },
        ],
        awaitRefetchQueries: true,
    });

    const [
        deleteItem,
        { loading: deleteLoading, error: deleteError, data: deleteData },
    ] = useDeleteItemMutation({
        variables: {
            id: item.id ?? '',
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
            const data = cache.readQuery<ItemsByListIdQuery>({
                query: ITEMS_BY_LIST_ID,
                variables: { id: listId },
            });
            if (data?.allItems) {
                // purge the items with the deleted item's id
                const updatedList = data.allItems?.filter(
                    (item) => item?.id !== itemId,
                );
                // write back to cache
                cache.writeQuery({
                    query: ITEMS_BY_LIST_ID,
                    variables: { id: listId },
                    data: {
                        allItems: updatedList,
                    },
                });
            }
        },
    });

    const resetItem = () => {
        setItem(
            initialItem || {
                id: '',
                title: '',
                quantity: 1,
                done: false,
            },
        );
    };

    const updateQuantity = (difference: number): void => {
        setItem((item) => ({
            ...item,
            quantity: Math.max(1, (item.quantity ?? 1) + difference),
        }));
    };

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.endsWith('+')) {
            updateQuantity(1);
        } else if (e.currentTarget.value.endsWith('-')) {
            updateQuantity(-1);
        } else {
            const title = e.currentTarget.value;
            setItem((item) => ({
                ...item,
                title,
            }));
        }
        e.preventDefault();
    };

    // keyboard handler for speedy mobile keyboard entries
    const handleKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === '+') {
            // + ups the amount, but will not be printed
            updateQuantity(1);
            e.preventDefault();
        } else if (e.key === '-') {
            // - downs the amount, but not below 1, and will not be printed
            updateQuantity(-1);
            e.preventDefault();
        } else if (e.key === 'Enter' && e.currentTarget.checkValidity()) {
            if (item.id) {
                updateItem();
            } else {
                createItem();
                resetItem();
            }
            e.preventDefault();
        }
    };

    return {
        item,
        setItem,
        createItem,
        updateItem,
        deleteItem,
        updateQuantity,
        handleChange,
        handleKeyEvent,
    };
};

import { gql } from '@apollo/client';
import React, { useState } from 'react';
import { Upload } from 'react-feather';
import styled from 'styled-components';
import { useCreateItemMutation } from '../../types/graphql-generated';
import ItemEdit from './ItemEdit';
import { QUERY_LIST_BY_ID } from './SingleList';

const CreateItemsStyles = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: alpha(background-color, 0.666);

    padding: 10px;

    button {
        border: none;
        padding: 0 20px;
        font-size: calc(var(--global-font-size) * 2);
        cursor: pointer;
    }

    .item {
        flex-grow: 3;
    }

    .amount {
        flex-shrink: 3;

        display: flex;
        justify-content: space-around;
        align-items: center;

        .more {
            color: var(--subtitle-color);
        }
    }

    .submit {
        padding: 0 20px;
        cursor: pointer;
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

const CreateItems = ({ listId }: { listId: string }): JSX.Element => {
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState(1);

    const [createItem, { loading, error, data }] = useCreateItemMutation({
        variables: {
            title,
            quantity,
            list: {
                connect: {
                    id: listId,
                },
            },
        },
        // optional: queries that will be re-fetched after the mutation
        refetchQueries: [
            { query: QUERY_LIST_BY_ID, variables: { id: listId } },
        ],
        awaitRefetchQueries: true,
    });

    const handleCreate = async () => {
        const res = await createItem();
        if (res?.data?.createItem?.id) {
            setTitle('');
            setQuantity(1);
        }
    };

    const handleChange = (
        newQuantity: number,
        newTitle: string,
        triggerSave: boolean,
    ) => {
        setQuantity(Math.max(1, newQuantity));
        setTitle(newTitle);
        if (triggerSave) {
            handleCreate();
        }
    };

    return (
        <CreateItemsStyles>
            <div className="item">
                <ItemEdit
                    title={title}
                    quantity={quantity}
                    onChange={handleChange}
                />
            </div>

            <div className="submit">
                <Upload onClick={handleCreate} />
            </div>
        </CreateItemsStyles>
    );
};

export default CreateItems;

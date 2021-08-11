import { gql } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Item, useItemsByListIdQuery } from '../../types/graphql-generated';
import { getItemCountTodo } from '../lib/listUtils';
import ErrorMessage from './ErrorMessage';
import ListProgress from './ListProgress';
import SingleItem from './SingleItem';

export const ITEMS_BY_LIST_ID = gql`
    query itemsByListId($id: ID!) {
        allItems(where: { list: { id: $id } }, sortBy: done_ASC) {
            id
            title
            quantity
            done
            list {
                id
            }
        }
    }
`;

const ListStyles = styled.section`
    padding: 0 10px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    .items {
        flex: 1;
        overflow-y: auto;
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        align-content: flex-start;
    }
`;

const SingleList = (): JSX.Element => {
    const { id } = useParams<{ id: string }>();
    const { data, loading, error } = useItemsByListIdQuery({
        variables: { id },
    });

    const items = data && (data.allItems as Item[]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <ErrorMessage error={error} />;
    }

    const itemsNeeded = getItemCountTodo(items ?? []);

    return (
        <ListStyles>
            {items?.length === 0 && <h3>Ready to go! What do you need?</h3>}

            {itemsNeeded > 0 && (
                <h3>
                    I need {itemsNeeded} more thing{itemsNeeded > 1 ? 's' : ''}:
                </h3>
            )}

            <div className="items">
                {items?.map((item: Item) => (
                    <SingleItem key={item.id} item={item} />
                )) ?? <ErrorMessage error={'No items'}></ErrorMessage>}
            </div>

            <ListProgress items={items ?? []} />
        </ListStyles>
    );
};

export default SingleList;

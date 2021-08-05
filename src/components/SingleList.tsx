import { gql } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Item, useListByIdQuery } from '../../types/graphql-generated';
import getItemCount from '../lib/getItemsFromList';
import ErrorMessage from './ErrorMessage';
import SingleItem from './SingleItem';

export const QUERY_LIST_BY_ID = gql`
    query listById($id: ID!) {
        List(where: { id: $id }) {
            title
            subtitle
            items {
                id
                title
                quantity
            }
        }
    }
`;

const ListStyles = styled.section`
    padding: 0 10px;

    .items {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        align-content: flex-start;
    }
`;

const SingleList = (): JSX.Element => {
    const { id } = useParams<{ id: string }>();
    const { data, loading, error } = useListByIdQuery({
        variables: { id },
    });

    const list = data && data.List;

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <ErrorMessage error={error} />;
    }

    const itemsNeeded = getItemCount(list?.items ?? []);

    return (
        <ListStyles>
            {list?.items?.length === 0 && (
                <h3>Ready to go! What do you need?</h3>
            )}

            {itemsNeeded > 0 && (
                <h3>
                    I need {itemsNeeded} thing{itemsNeeded > 1 ? 's' : ''}:
                </h3>
            )}

            <div className="items">
                {list?.items?.map((item: Item) => (
                    <SingleItem key={item.id} item={item} />
                )) ?? <ErrorMessage error={'No items'}></ErrorMessage>}
            </div>
        </ListStyles>
    );
};

export default SingleList;

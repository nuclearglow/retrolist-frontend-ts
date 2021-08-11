import React from 'react';
import { Upload } from 'react-feather';
import styled from 'styled-components';
import { useItem } from '../hooks/useItem';
import { AmountButtonStyles, AmountStyles } from './ItemFormStyles';
import { SingleItemStyles } from './SingleItem';

const CreateItemsStyles = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    background-color: alpha(background-color, 0.666);

    padding: 10px;

    button {
        border: none;
        padding: 0 10px;
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

const ItemCreate = ({ listId }: { listId: string }): JSX.Element => {
    const {
        item,
        setItem,
        createItem,
        updateQuantity,
        handleChange,
        handleKeyEvent,
    } = useItem(undefined, listId);

    const handleCreate = async () => {
        await createItem();
        setItem({
            id: '',
            title: '',
            quantity: 1,
        });
    };

    return (
        <CreateItemsStyles>
            <SingleItemStyles>
                <AmountStyles>
                    <AmountButtonStyles
                        type="button"
                        className="btn btn-small btn-primary btn-ghost"
                        onClick={() => {
                            updateQuantity(1);
                        }}
                    >
                        +
                    </AmountButtonStyles>

                    <span className={item.quantity ?? 1 > 1 ? 'more' : ''}>
                        {item.quantity}x
                    </span>

                    <AmountButtonStyles
                        type="button"
                        className="btn btn-small btn-primary btn-ghost"
                        onClick={() => {
                            updateQuantity(-1);
                        }}
                    >
                        -
                    </AmountButtonStyles>

                    <input
                        id="edit"
                        name="edit"
                        type="text"
                        minLength={1}
                        required
                        placeholder="I need..."
                        autoComplete="off"
                        value={item.title ?? ''}
                        onChange={handleChange}
                        onKeyPress={handleKeyEvent}
                    />
                </AmountStyles>
                <button
                    type="button"
                    className="btn btn-small btn-primary btn-ghost"
                    onClick={handleCreate}
                >
                    <Upload />
                </button>
            </SingleItemStyles>
        </CreateItemsStyles>
    );
};

export default ItemCreate;

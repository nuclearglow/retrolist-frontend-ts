import React from 'react';
import { Save, Trash2 } from 'react-feather';
import type { Item } from '../../types/graphql-generated';
import { useItem } from '../hooks/useItem';
import { AmountButtonStyles, AmountStyles } from './ItemFormStyles';
import { SingleItemStyles } from './SingleItem';

const ItemEdit = ({
    initialItem,
    listId,
    setEditMode,
}: {
    initialItem: Item;
    listId: string;
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
    const {
        item,
        updateItem,
        deleteItem,
        updateQuantity,
        handleChange,
        handleKeyEvent,
    } = useItem(initialItem, listId);

    const handleUpdate = async () => {
        await updateItem();
        setEditMode(false);
    };

    const handleDelete = async () => {
        await deleteItem();
        setEditMode(false);
    };

    return (
        <SingleItemStyles>
            <button
                type="button"
                className="btn btn-small btn-error btn-ghost"
                onClick={handleDelete}
            >
                <Trash2 size={16} />
            </button>

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
                onClick={handleUpdate}
            >
                <Save />
            </button>
        </SingleItemStyles>
    );
};

export default ItemEdit;

import React from 'react';
import { Trash2 } from 'react-feather';
import styled from 'styled-components';
import { SingleItemStyles } from './SingleItem';

const AmountStyles = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .more {
        color: var(--subtitle-color);
    }
`;

const AmountButtonStyles = styled.button`
    border: 0;
    padding: 0 20px;
    font-size: calc(var(--global-font-size) * 2);
`;

const ItemEdit = ({
    quantity,
    title,
    onChange,
    onDelete,
}: {
    quantity: number;
    title: string;
    onChange: (
        newQuantity: number,
        newTitle: string,
        triggerSave: boolean,
    ) => void;
    onDelete?: () => Promise<void>;
}): JSX.Element => {
    // trigger parent handler - updates props and triggers save on "Enter"
    const change = (
        newQuantity: number,
        newTitle: string,
        triggerSave: boolean,
    ) => {
        onChange(newQuantity, newTitle, triggerSave);
    };

    const handleDelete = () => {
        if (typeof onDelete === 'function') {
            onDelete();
        }
    };

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.endsWith('+')) {
            change(quantity + 1, title, false);
        } else if (e.currentTarget.value.endsWith('-')) {
            change(Math.max(1, quantity - 1), title, false);
        } else {
            change(quantity, e.currentTarget.value, false);
        }
        e.preventDefault();
    };

    // keyboard handler for speedy mobile keyboard entries
    const handleKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === '+') {
            // + ups the amount, but will not be printed
            change(quantity + 1, title, false);
            e.preventDefault();
        } else if (e.key === '-') {
            // - downs the amount, but not below 1, and will not be printed
            change(Math.max(1, quantity - 1), title, false);
            e.preventDefault();
        } else if (e.key === 'Enter' && e.currentTarget.checkValidity()) {
            // on enter, if the input field is valid, save (checks minLength / maxLength)
            change(quantity, title, true);
            e.preventDefault();
        }
    };

    return (
        <SingleItemStyles>
            <AmountStyles>
                <AmountButtonStyles
                    type="button"
                    className="button btn btn-primary btn-ghost"
                    onClick={() => change(quantity + 1, title, false)}
                >
                    +
                </AmountButtonStyles>

                <span className={quantity > 1 ? 'more' : ''}>{quantity}x</span>

                <AmountButtonStyles
                    type="button"
                    className="btn btn-primary btn-ghost"
                    onClick={() => change(quantity - 1, title, false)}
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
                    value={title}
                    onChange={handleChange}
                    onKeyPress={handleKeyEvent}
                />
                {typeof onDelete === 'function' && (
                    <button
                        type="button"
                        className="btn btn-small btn-error btn-ghost"
                        onClick={() => handleDelete()}
                    >
                        <Trash2 size={16} />
                    </button>
                )}
            </AmountStyles>
        </SingleItemStyles>
    );
};

export default ItemEdit;

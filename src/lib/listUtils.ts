import type { Item, List } from '../../types/graphql-generated';

export const getTotalItems = (lists: Array<List>): number => {
    if (lists.length === 0) {
        return 0;
    }
    return lists.reduce(
        (accumulator, current) =>
            accumulator + (current.items ? getItemCount(current.items) : 0),
        0,
    );
};

export const getItemCount = (items: Array<Item>): number => {
    if (items.length === 0) {
        return 0;
    }
    return items.reduce(
        (accumulator, current) =>
            accumulator + (current.quantity ? current.quantity : 0),
        0,
    );
};

import type { Item } from '../../types/graphql-generated';

const getItemCount = (items: Array<Item>): number => {
    if (items.length === 0) {
        return 0;
    }
    return items.reduce(
        (accumulator, current) =>
            accumulator + (current.quantity ? current.quantity : 0),
        0,
    );
};

export default getItemCount;

import type { List } from '../../types/graphql-generated';

const getItemCountFromList = (list: List): number => {
    const itemCount = list?.items?.length ?? 0;
    if (itemCount === 0) {
        return 0;
    }
    return list.items.reduce(
        (accumulator, current) =>
            accumulator + (current.quantity ? current.quantity : 0),
        0,
    );
};

export default getItemCountFromList;

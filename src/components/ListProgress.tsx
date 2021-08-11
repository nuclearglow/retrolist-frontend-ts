import React from 'react';
import styled from 'styled-components';
import type { Item } from '../../types/graphql-generated';
import { getItemCount } from '../lib/listUtils';

interface ProgressProps {
    width: string;
}

const ProgressBarStyles = styled.div<ProgressProps>`
    width: ${({ width }) => `${width}`};
`;

const ListProgress = ({ items }: { items: Item[] }): JSX.Element | null => {
    const progress =
        (items.reduce(
            (accumulator, current) =>
                accumulator + (current.done ? current.quantity ?? 1 : 0),
            0,
        ) / getItemCount(items) ?? 1) * 100;

    if (isNaN(progress)) {
        return null;
    }

    return (
        <div className="progress-bar progress-bar-show-percent">
            <ProgressBarStyles
                width={`${progress.toFixed(0)}%`}
                className="progress-bar-filled"
                data-filled={`${progress.toFixed(0)}%`}
            ></ProgressBarStyles>
        </div>
    );
};

export default ListProgress;

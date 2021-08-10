import React from 'react';

const Message = ({
    children,
}: {
    children?: React.ReactNode;
}): JSX.Element | null => {
    if (!children) return null;

    return (
        <div className="terminal-alert terminal-alert-primary">{children}</div>
    );
};

export default Message;

import React from 'react';
import { ArrowLeft } from 'react-feather';
import { useHistory, useLocation } from 'react-router-dom';

const BackButton = (): JSX.Element => {
    // code
    const location = useLocation();
    const history = useHistory();

    const handleBack = (e: React.FormEvent) => {
        e.preventDefault();
        if (location.pathname.startsWith('/list/')) {
            history.push('/lists');
        } else {
            history.push('/');
        }
    };

    return (
        <button
            type="button"
            className="btn btn-small btn-primary btn-ghost"
            onClick={handleBack}
        >
            <ArrowLeft />
        </button>
    );
};

export default BackButton;

import React from 'react';

const Spinner = () => {
    return (
        <div>
            <button className="btn btn-primary" type="button">
                <span className="spinner-border me-2 spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </div>
    );
};

export default Spinner;
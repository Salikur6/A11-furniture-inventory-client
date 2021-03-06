import React from 'react';

const Spinner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className='text-center my-3'>
                    <button className="btn btn-primary" type="button">
                        <span className="spinner-border me-2 spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Spinner;
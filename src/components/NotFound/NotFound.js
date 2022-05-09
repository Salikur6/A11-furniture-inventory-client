import React from 'react';
import img404 from '../../img/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img className='w-100' style={{ height: 'calc(100vh - (85px))' }} src={img404} alt="" />
        </div>
    );
};

export default NotFound;
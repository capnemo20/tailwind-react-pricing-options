import React from 'react';

const Link = ({route}) => {
    return (
        <div className="mr-10">
            <a href={route.path}>{route.name}</a>
        </div>
    );
};

export default Link;
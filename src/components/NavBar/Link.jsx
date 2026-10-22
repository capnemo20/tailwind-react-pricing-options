import React from 'react';

const Link = ({route}) => {
    return (
        <div className="lg:mr-10 px-4 hover:bg-amber-200">
            <a href={route.path}>{route.name}</a>
        </div>
    );
};

export default Link;
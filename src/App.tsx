import React from 'react';

export const App = () => {
    const fn = () => {
        return 5 + 6;
    };
    return (
        <h1 className='test'>{fn()}</h1>
    );
};
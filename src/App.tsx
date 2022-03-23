import React, { useState } from 'react';

export const App = () => {
    const [ state, setState ] = useState(5);

    return (
        <>
            <h1>{state}</h1>
            <button onClick={() => setState(prev => prev + 1)}></button>
        </>
    );
};
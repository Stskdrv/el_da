import React from 'react';
import New from './new';
import Entries from './entries';

const App = ({entries}) => {

    console.log(entries);
    return (
        <>
        <New/>
        <Entries/>
        </>
    )
};

export default App;
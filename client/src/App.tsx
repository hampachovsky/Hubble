import React from 'react';
import './App.less';
import { Navbar } from 'components/Navbar';

function App() {
    const d = 'Hello';
    return (
        <div className='App'>
            <h1>{d}</h1>
            <Navbar />
        </div>
    );
}

export default App;

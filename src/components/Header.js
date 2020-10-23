import React from 'react';
import Home from './Home'

function Header(props) {
    return (
        <header>
            <h1>CervezApp</h1>
            <Home {...props}/>
        </header>
    )
}

export default Header;
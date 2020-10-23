import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Brewery App</h1>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
        </header>
    )
}

export default Header;
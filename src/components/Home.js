import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => {
    return(
        <div>
            <nav>
            {!props.loggedIn && <Link to="/signup">Sign Up</Link>}
            {!props.loggedIn && <Link to="/login">Login</Link>}
            </nav>
        </div>
    )
}

export default Home;
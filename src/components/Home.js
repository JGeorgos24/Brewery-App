import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => {
    return(
        <div>
            <nav>
                {!props.loggedIn && <Link to="/signup">Sign Up</Link>}
                {!props.loggedIn && <Link to="/login">Login</Link>}
            </nav>
            <nav>
                <Link to="/BreweryList">Brewery List</Link>
                <Link to="/BreweryNearYou">Breweries Near You</Link>
                {props.loggedIn && <Link to="/profile">Your Profile</Link>}
            </nav>
        </div>
    )
}

export default Home;
import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => {
    return(
        <div>
            <nav className="LinkNavBar">
                <Link className="LinksInNavBar" to="/BreweryList">Brewery List</Link>
                <Link className="LinksInNavBar" to="/BeerList">Beer List</Link>
                <Link className="LinksInNavBar" to="/BreweryNearYou">Breweries Near You</Link>
                <Link className="LinksInNavBar" to="/Games">Drinking Games</Link>
                {props.loggedIn && <Link className="LinksInNavBar" to="/profile">Your Profile</Link>}
            </nav>
        </div>
    )
}

export default Home;
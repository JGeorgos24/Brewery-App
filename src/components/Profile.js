import React from 'react';
import {Link} from 'react-router-dom'

const Profile = (props) => {
    console.log(props)
    return(
        <div>
            <h1>Hello {props.loggedInUser[0].name}</h1>
            <nav>
                <Link to="/profile/beers">Beers</Link> 
                <Link to="/profile/breweries">Breweries</Link>
            </nav>
        </div>
        
    )
}

export default Profile;
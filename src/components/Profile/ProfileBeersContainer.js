import React from'react';
import ProfileBeers from './ProfileBeers';

const ProfileBeersContainer = (props) => {
    console.log(props)
    console.log(props.loggedInUser.userBeers)
    return(
        <div>
            <h1>Your Beer List</h1>
            {props.loggedInUser.userBeers.map((beer, id) => {
                return (<ProfileBeers handleRemove = {props.handleRemove} beer={beer} key={id} beerId = {id} />)
            })}
        </div>
    )
}

export default ProfileBeersContainer;
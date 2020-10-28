import React from'react';
import ProfileBreweries from './ProfileBreweries'

const ProfileBreweryContainer = (props) => {
    console.log(props)
    console.log(props.loggedInUser.userBrews)
    return(
        <div>
            <h1>My Brewery List</h1>
            {props.loggedInUser.userBrews.map((brews, id) => {
                return (<ProfileBreweries handleRemove = {props.handleRemove} brews={brews} key={id} brewId = {id} />)
            })}
        </div>
    )
}

export default ProfileBreweryContainer;
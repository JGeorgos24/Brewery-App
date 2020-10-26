import React from'react';
import ProfileBreweries from './ProfileBreweries'

const ProfileBreweryContainer = (props) => {
    console.log(props)
    return(
        <div>
            {props.userBrews.map((brews, id) => {
                return (<ProfileBreweries handleRemove = {props.handleRemove} brews={brews} key={id} brewId = {id} />)
            })}
        </div>
    )
}

export default ProfileBreweryContainer;
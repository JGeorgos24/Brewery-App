import React from'react';
import ProfileBeers from './ProfileBeers';

const ProfileBeersContainer = (props) => {
    console.log(props)
    console.log(props.loggedInUser.userBeers)
    return(
        <div>
            <h1>My Beer List</h1>
            {props.loggedInUser.userBeers.map((beer, id) => {
                return (<ProfileBeers 
                    handleRemove = {props.handleRemove} 
                    addFavoriteBeer = {props.addFavoriteBeer}
                    addTriedBeer = {props.addTriedBeer}
                    beer={beer} 
                    key={id} 
                    beerId = {id} />)
            })}                
            

        </div>
    )
}

export default ProfileBeersContainer;
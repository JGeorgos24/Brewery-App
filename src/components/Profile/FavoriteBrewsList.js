import React from 'react';

const FavoriteBrewsList = (props) => {
    return (
        <div>
            <h2>{props.brew.name}</h2>
            <button onClick={()=> props.removeFavoriteBrew(props.brewId, true)}>Remove</button>
        </div>
    )
}

export default FavoriteBrewsList;
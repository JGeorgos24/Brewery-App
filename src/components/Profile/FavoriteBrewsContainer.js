import React from 'react';
import FavoriteBrewsList from "./FavoriteBrewsList";

const FavoriteBrewsContainer=(props) =>{

    return(
        <div>
            <h1>Favorite Breweries List</h1>
                {props.loggedInUser.userFavoriteBrews.map((brew, id) => {
            return (<FavoriteBrewsList
                handleRemove = {props.handleRemove} 
                addFavoriteBrew = {props.addFavoriteBrew}
                removeFavoriteBrew={props.removeFavoriteBrew}
                brew={brew} 
                key={id} 
                brewId = {id} />)
            })} 

        </div>
    )
    
}

export default FavoriteBrewsContainer;
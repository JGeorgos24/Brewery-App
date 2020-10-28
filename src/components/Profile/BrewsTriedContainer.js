import React from 'react'
import BrewsTriedList from './BrewsTriedList';

const BrewsTriedContainer = (props) => {
    return(
        <div>
            <h1>Breweries I've Visited</h1>
            {props.loggedInUser.userTriedBrews.map((brew, index) => {
                return <BrewsTriedList 
                brew = {brew} 
                key = {index} 
                brewId = {index}
                removeTriedBrew = {props.removeTriedBrew}/>
            })}
        </div>
    )
}

export default BrewsTriedContainer;
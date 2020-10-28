import React from 'react';

const BrewsTriedList = (props) => {
    return(
        <div>
            <h2>{props.brew.name}</h2>
            <button onClick = {() => {props.removeTriedBrew(props.brewId)}}>Remove</button>
        </div>
    )
}

export default BrewsTriedList;
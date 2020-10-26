import React, { Component } from "react";
import BreweryList from "./BreweryList";

class BreweryContainer extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }


    render() {
    console.log(this.props.breweries)
        return(
            <div className="BreweryContainer">  
                    {this.props.breweries.map((breweries, id) => {
                        return <BreweryList breweries={breweries} key={id} />
                    })}
            </div>
        )
    }
}

export default BreweryContainer;
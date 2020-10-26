import React, {Component} from "react";
import axios from "axios";



class BreweryList extends Component{
    constructor(props) {
        super(props);

        this.state={

        }
    }



    render(){
        console.log(this.props.breweries)
        return(
            <div className="BreweriesList">
                <h2>{this.props.breweries.name}</h2>
                <p>{this.props.breweries.street}</p>
                <p>{this.props.breweries.city}, {this.props.breweries.state}</p>
                <p>Phone: {this.props.breweries.phone}</p>
                Website:<a href={this.props.breweries.website_url} target="_blank">{this.props.breweries.name}</a>
                
            </div>
        )
    }
}

export default BreweryList;
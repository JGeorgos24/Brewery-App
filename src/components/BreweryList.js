import React, {Component} from "react";
import axios from "axios";



class BreweryList extends Component{
    constructor(props) {
        super(props);

        this.state={

        }
    }



    render(){
        // console.log(this.props.breweries)
        return(
            <div className="BreweriesList">
                <h2 className="BreweryName">{this.props.breweries.name}</h2>
                <a className="BreweryStreet" href={`http://maps.google.com/?q=${this.props.breweries.street},${this.props.breweries.city},${this.props.breweries.state},${this.props.breweries.postal_code}`} target="_blank">{this.props.breweries.street} </a>
                <p className="BreweryAddress">{this.props.breweries.city}, {this.props.breweries.state}</p>
                <p className="BreweryPhone">Phone: {this.props.breweries.phone}</p>
                Website:<a className="BreweryWebsite" href={this.props.breweries.website_url} target="_blank">{this.props.breweries.name}</a>
            </div>
        )
    }
}

export default BreweryList;
import React, { Component } from "react";
import BreweryList from "./BreweryList";
import axios from "axios";

import BreweryNearYou from './BreweryNearYou';

const AllBreweriesURL = "https://api.openbrewerydb.org/breweries?by_city=&per_page=50";
class BreweryContainer extends Component{
    constructor(props){
        super(props);

        this.state = ({
            search: ""
        })
    }

    onChange = (event) => {
        event.preventDefault();
        // const breweries = this.state.breweries;
        // breweries.filter(brewery => {

        // })
        this.setState({
            // [event.target.name]: event.target.value
            search: event.target.value.toLowerCase()
        })
    }

   

    render() {
    console.log(this.props)
        return(
            <div className="BreweryContainer">  
                <form>
                    <input className = 'search'
                    type = 'text'
                    name = 'state'
                    placeholder = 'Search by Brewery, City, or State'
                    onChange = {this.onChange}
                    />
                 
                </form>
                {this.props.flag ? 
                    <div>
                        {this.props.breweries.map((breweries) => (
                            breweries.name.toLowerCase().includes(this.state.search) ||
                            breweries.state.toLowerCase().includes(this.state.search) ||
                            breweries.city.toLowerCase().includes(this.state.search)
                            ?
                            <BreweryList breweries={breweries} />
                            : null
                        ))}
                    </div>
                :
                    <div></div>
                }                   
            </div>
        )
    }
}

export default BreweryContainer;
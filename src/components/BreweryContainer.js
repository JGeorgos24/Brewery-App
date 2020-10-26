import React, { Component } from "react";
import BreweryList from "./BreweryList";
import axios from "axios";

import BreweryNearYou from './BreweryNearYou';

const AllBreweriesURL = "https://api.openbrewerydb.org/breweries?by_city=&per_page=50";
class BreweryContainer extends Component{
    constructor(props){
        super(props);

        this.state={
            breweries:[],
            search: ''
        }
    }

    async componentDidMount() {
        const resp = await axios.get(AllBreweriesURL);
        for(let i=0; i < resp.data.length; i++) {
          let upvote = Math.floor(Math.random() * 100);
          resp.data[i].upvotes = upvote;
        }
        this.setState({
          breweries: resp.data
        })
        console.log(resp)
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
    console.log(this.state.breweries)
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
                <div>
                    {/* {this.state.breweries.map((breweries, id) => {
                            return <BreweryList breweries={breweries} key={id} />
                    })} */}
                    {this.state.breweries.map((breweries) => (
                        breweries.name.toLowerCase().includes(this.state.search) ||
                        breweries.state.toLowerCase().includes(this.state.search) ||
                        breweries.city.toLowerCase().includes(this.state.search)
                         ?
                        <BreweryList breweries={breweries} />
                        : null
                    ))}
                </div>
                {/* <div>
                    {this.state.breweries.map((breweries, id) => {
                        return <BreweryNearYou breweries={breweries} key={id} brewId={id} />
                    })}
                </div> */}
                   
            </div>
        )
    }
}

export default BreweryContainer;
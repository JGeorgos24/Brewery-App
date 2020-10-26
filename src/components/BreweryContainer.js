import React, { Component } from "react";
import BreweryList from "./BreweryList";
import axios from "axios";

import BreweryNearYou from './BreweryNearYou';

const AllBreweriesURL = "https://api.openbrewerydb.org/breweries?by_city=&per_page=50";
class BreweryContainer extends Component{
    constructor(props){
        super(props);

        this.state={
            breweries:[]
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
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
    console.log(this.state)
        return(
            <div className="BreweryContainer">  
                <form>
                    <input
                    type = 'text'
                    name = 'state'
                    placeholder = 'State'
                    onChange = {this.onChange}
                    />
                </form>
                <div>
                    {this.state.breweries.map((breweries, id) => {
                            return <BreweryList breweries={breweries} key={id} />
                    })}
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
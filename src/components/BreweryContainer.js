import React, { Component } from "react";
import BreweryList from "./BreweryList";
import axios from "axios";

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

    render() {
    console.log(this.state)
        return(
            <div className="BreweryContainer">  
                    {this.state.breweries.map((breweries, id) => {
                        return <BreweryList breweries={breweries} key={id} />
                    })}
            </div>
        )
    }
}

export default BreweryContainer;
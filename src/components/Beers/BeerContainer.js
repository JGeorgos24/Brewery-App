import React, {Component} from "react";
import BeerList from "./BeerList";


class BeerContainer extends Component{
    constructor(props) {
        super(props);

        this.state={
            beer:"",
        }
    }

    onChange = (event) => {
        event.preventDefault();
 
        this.setState({
            beer: event.target.value.toLowerCase()
        })
    }

    render(){
        return(
            <div>
                <h1> Beer List </h1>
                <form>
                    <input className = 'search'
                    type = 'text'
                    name = 'beer'
                    placeholder = 'Search for a Beer'
                    onChange = {this.onChange}
                    />
                </form>
                {this.props.beers.map((beer, id) => (
                    beer.toLowerCase().includes(this.state.beer) ?
                    < BeerList beer={beer} key={id} beerId={id} />: null)
                )}
            </div>
        )
    }
}

export default BeerContainer;
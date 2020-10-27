import React, {Component} from "react";


class BeerList extends Component{
    constructor(props) {
        super(props);

        this.state={
            BeerContainer: [
                {
                    state: ''
                }
            ]
        }
    }


    render(){
        return(
            <div>
                <p>{this.props.beer}</p>
                <button onClick={() => this.props.handleAdd(this.props.beerId, true)}>Add to Favorite Beers</button>
            </div>
        )
    }
}

export default BeerList;
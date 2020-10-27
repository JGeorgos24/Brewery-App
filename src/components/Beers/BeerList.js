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
            </div>
        )
    }
}

export default BeerList;
import React, {Component} from "react";


class BreweryNearYou extends Component{
    constructor(props) {
        super(props);

        this.state={
            breweries: [
                {
                    state: ''
                }
            ]
        }
    }

    // onChange = (event) => {
    //     event.preventDefault();
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    render(){
        // console.log(this.props.breweries);
        return(
            <div>
                <h1> Breweries Near You</h1>
                {/* <form>
                    <input
                    type = 'text'
                    name = 'state'
                    placeholder = 'State'
                    onChange = {this.onChange}
                    />
                </form> */}
                {/* {this.props.breweries.name} */}
                {/* {this.props.breweries.map((brewery, index) => {
                    return <h3>{brewery.name}</h3>
                })} */}
            </div>
        )
    }
}

export default BreweryNearYou;
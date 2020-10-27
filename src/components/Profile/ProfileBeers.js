import React, {Component} from 'react';

class ProfileBeers extends Component {
    constructor(props){
        super(props);

        // this.state={
        // }
    }

    render() {
        // console.log(this.props.beer)
        return(
            <div>
                <h2>{this.props.beer}</h2>
                <button onClick={()=> this.props.handleRemove(this.props.beerId, true)}>Remove</button>
            </div>
        )
    }
}

export default ProfileBeers;
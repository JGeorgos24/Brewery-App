import React, {Component} from 'react';

class ProfileBreweries extends Component {
    constructor(props){
        super(props);

        // this.state={
        //     userBrews: [
        //         {
        //             name: 'Avendale Beer Company',
        //             city: 'Bromingham',
        //             state: 'Alabama'
        //         }
            // ],
        // }
    }

    render() {
        console.log(this.props.brews.name)
        return(
            <div>
                
                <h2>{this.props.brews.name}</h2>
                <p>{this.props.brews.city}, {this.props.brews.state}</p>
                <button onClick={()=> this.props.handleRemove(this.props.brewId, false)}>Remove</button>
                <button onClick = {() => this.props.addFavoriteBrew(this.props.brewId)}>Add to Favorites</button>
                <button onClick = {() => this.props.addTriedBrew(this.props.brewId)}>Add to Tried Beers</button>
            </div>
        )
    }
}

export default ProfileBreweries;
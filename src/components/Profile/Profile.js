import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ProfileBreweries from './ProfileBreweries';
import {Route} from 'react-router-dom';
import ProfileBreweryContainer from './ProfileBreweryContainer';
import ProfileBeersContainer from "./ProfileBeersContainer";
import FavoriteBeersList from './FavoriteBeersList';
import FavoriteBeersContainer from "./FavoriteBeersContainer";
import BeersTriedContainer from './BeersTriedContainer';

class Profile extends Component {
    constructor(props){
        super(props)

        this.state={
            // userBrews: [
            //     {
            //         name: 'Avendale Beer Company',
            //         city: 'Birmingham',
            //         state: 'Alabama'
            //     },
            //     {
            //         name: 'bbbb',
            //         city: 'bbbbb',
            //         state: 'bbbbb'
            //     }
            // ],
        }
    }

    

    render () {
        console.log(this.props)
        return(
            <div>
                <h1>Hello {this.props.loggedInUser.name}</h1>
                <nav>
                    <Link to="/profile/beers">Beers</Link> 
                    
                    <Link to="/profile/breweries">Breweries</Link>
                </nav>
                <Route path="/profile/breweries"
                    render={ (props) => {
                        return <ProfileBreweryContainer {...this.props} {...this.state} handleRemove={this.props.handleRemove} /> 
                }} />
                <Route path="/profile/beers"
                    render={ (props) => {
                        return(                         
                            <div>
                                <ProfileBeersContainer 
                                    {...this.props} 
                                    {...this.state} 
                                    handleRemove={this.props.handleRemove} 
                                    addFavoriteBeer = {this.props.addFavoriteBeer}
                                    addTriedBeer = {this.props.addTriedBeer}
                                /> 
                                <FavoriteBeersContainer 
                                    {...this.props} 
                                    {...this.state}
                                    handleRemove={this.props.handleRemove}
                                    addFavoriteBeer = {this.props.addFavoriteBeer}
                                    removeFavoriteBeer={this.props.removeFavoriteBeer} 
                                />
                                <BeersTriedContainer
                                    {...this.props}
                                    {...this.state}
                                    removeTriedBeer = {this.props.removeTriedBeer}
                                />
                            </div>
                        )
                }} />
                
            </div>
            
        )
    }
}
export default Profile;
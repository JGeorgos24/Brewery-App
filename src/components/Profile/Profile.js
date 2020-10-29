import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import ProfileBreweryContainer from './ProfileBreweryContainer';
import ProfileBeersContainer from "./ProfileBeersContainer";
import FavoriteBeersList from './FavoriteBeersList';
import FavoriteBeersContainer from "./FavoriteBeersContainer";
import BeersTriedContainer from './BeersTriedContainer';
import FavoriteBrewsContainer from "./FavoriteBrewsContainer";
import BrewsTriedContainer from './BrewsTriedContainer';

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

        return(
            <div>
                <div className="Games">
                    <nav className="GamesNav">
                        <Link className="userOption LinksInNavBar" to="/profile/beers">Your Beers</Link> 
                            
                        <Link className="userOption LinksInNavBar" to="/profile/breweries">Your Breweries</Link>
                    </nav>
                    <div className="space">space</div>
                </div>
                <h1 className="userName">Hello {this.props.loggedInUser.name}</h1>
                <Route path="/profile/breweries"
                    render={ (props) => {
                        return (
                            <div>
                                <ProfileBreweryContainer 
                                    {...this.props} 
                                    {...this.state} 
                                    handleRemove={this.props.handleRemove} 
                                /> 
                                <FavoriteBrewsContainer 
                                    {...this.props} 
                                    {...this.state}
                                    handleRemove={this.props.handleRemove}
                                    addFavoriteBrew = {this.props.addFavoriteBrew}
                                    removeFavoriteBrew={this.props.removeFavoriteBrew} 
                                />
                                <BrewsTriedContainer
                                    {...this.props}
                                    {...this.state}
                                    removeTriedBrew = {this.props.removeTriedBrew}
                                />
                            </div>
                        )}} /> 
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
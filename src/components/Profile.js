import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ProfileBreweries from './ProfileBreweries';
import {Route} from 'react-router-dom';
import ProfileBreweryContainer from './ProfileBreweryContainer'

class Profile extends Component {
    constructor(props){
        super(props)

        this.state={
            userBrews: [
                {
                    name: 'Avendale Beer Company',
                    city: 'Birmingham',
                    state: 'Alabama'
                },
                {
                    name: 'bbbb',
                    city: 'bbbbb',
                    state: 'bbbbb'
                }
            ],
        }
    }

    handleRemove = (brewId) => {
        const userBrews = this.state.userBrews;
        const newBrews1 = userBrews.slice(0, brewId)
        const newBrews2 = userBrews.slice(brewId + 1, userBrews.length)
        const both = newBrews1.concat(newBrews2)
        this.setState({
            userBrews: both
        })

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
                        return <ProfileBreweryContainer {...this.props} {...this.state} handleRemove={this.handleRemove} /> 
                }} />
            </div>
            
        )
    }
}
export default Profile;
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import { Route, withRouter } from 'react-router-dom';

import Header from './components/Header';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile';
import Home from './components/Home';
import BreweryList from './components/BreweryList';
import BreweryNearYou from "./components/BreweryNearYou";
import BreweryContainer from "./components/BreweryContainer";
import ProfileBreweries from './components/ProfileBreweries';

const AllBreweriesURL = "https://api.openbrewerydb.org/breweries?by_city=&per_page=50";

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      breweries: "",
      users: [{
        name: "Random User",
        age: 0,
        username: "username",
        password: "password",
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
      ]
        }],
      loggedIn: false,
      error: "",
      loggedInUser: {
        name: "Random User",
        age: 0,
        username: "username",
        password: "password",
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
      ]
      }
    }
  }

handleAdd = (brewId) => {
    const user = this.state.loggedInUser
    user.userBrews.push(this.state.breweries[brewId])
    console.log(this.state.breweries[brewId])
    this.setState({
        loggedInUser: user
    }) 
    this.props.history.push('/profile/breweries');
}

  handleRemove = (brewId) => {
    const userBrews = this.state.loggedInUser.userBrews;
    const newBrews1 = userBrews.slice(0, brewId)
    const newBrews2 = userBrews.slice(brewId + 1, userBrews.length)
    const both = newBrews1.concat(newBrews2)
    const user = this.state.loggedInUser
    user.userBrews = both
    console.log(newBrews1)
    this.setState({
        loggedInUser: user
    })

}

  handleSignup = (e, userInfo) => {
    e.preventDefault();
    const users = this.state.users;
    users.push(userInfo);
    this.setState({
      loggedInUser: users[users.length - 1],
      loggedIn: true
    })
    this.props.history.push('/profile');
  }

  handleLogin = (e, userInfo) => {
    e.preventDefault();
    const users = this.state.users;
    console.log(userInfo);
    const filteredUser = users.filter(
      user => {
        return user.username === userInfo.username && user.password === userInfo.password
      }
    )
    // console.log(filteredUser)
    if(filteredUser.length > 0) {
      this.setState({
        loggedIn: true,
        error: "",
        loggedInUser: filteredUser[0]
      })
      this.props.history.push('/profile');
    } else {
      this.setState({
        error: "Incorrect Credentials"
      })
    }
  }

  // renderAllBreweries = () => {
  //   const resp = await axios.get(AllBreweriesURL);
  //   for(let i=0; i < resp.data.length; i++) {
  //     let upvote = Math.floor(Math.random() * 100);
  //     resp.data[i].upvotes = upvote;
  //   }
  //   this.setState({
  //     breweries: resp.data
  //   })
  // }

  async componentDidMount() {
    
    const resp = await axios.get(AllBreweriesURL);
    for(let i=0; i < resp.data.length; i++) {
      let upvote = Math.floor(Math.random() * 100);
      resp.data[i].upvotes = upvote;
    }
    this.setState({
      breweries: resp.data
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header {...this.state}/>
        <main>
          <Route path="/signup" 
                 render={ (props) => {
                   return <SignUp 
                            handleSignup={this.handleSignup} 
                            {...this.state} />
                 }}
          />

          <Route path="/login" 
                 render={ (props) => {
                   return <Login 
                            handleLogin={this.handleLogin} 
                            {...this.state} />
                 }} 
          />

          <Route path="/profile"
                render={ (props) => {
                  return <Profile {...this.state} handleRemove = {this.handleRemove}/>
                }} 
          />

          <Route path="/BreweryList"
            render={ (props) => {
              return <BreweryContainer {...this.props} {...this.state} handleAdd = {this.handleAdd} /> 
            }} 
          />

          <Route path="/BreweryNearYou"
            render={ (props) => {
              return <BreweryContainer {...this.props} {...this.state}  /> 
            }} 
          />
  
        </main>
      </div>
    );
  }
}

export default withRouter(App);

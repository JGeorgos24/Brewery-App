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
        password: "password"
      }],
      loggedIn: false,
      flag: false,
      error: "",
      loggedInUser: {}
    }
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

  async renderAllBreweries() {
    const resp = await axios.get(AllBreweriesURL);
    for(let i=0; i < resp.data.length; i++) {
      let upvote = Math.floor(Math.random() * 100);
      resp.data[i].upvotes = upvote;
    }
    this.setState({
      breweries: resp.data,
      flag: true
    })
  }

  componentDidMount() {
    this.renderAllBreweries();
  }

  render() {
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
                  return <Profile {...this.state} />
                }} 
          />

          <Route path="/BreweryList"
            render={ (props) => {
              return <BreweryContainer 
                      renderAllBreweries={this.renderAllBreweries} 
                      breweries={this.state.breweries}
                      {...this.props} 
                      {...this.state} /> 
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

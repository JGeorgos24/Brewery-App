import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import { Route, withRouter } from 'react-router-dom';

import Header from './components/Header';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile';

const url = "https://api.openbrewerydb.org/breweries?by_city=decorah&per_page=50";

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
      error: "",
      loggedInUser: {}
    }
  }

  handleSignup = (e, userInfo) => {
    e.preventDefault();
    const users = this.state.users;
    users.push(userInfo);
    this.setState({
      users: users
    })
    this.props.history.push('/');
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
        loggedInUser: filteredUser
      })
      this.props.history.push('/profile');
    } else {
      this.setState({
        error: "Incorrect Credentials"
      })
    }
  }

  async componentDidMount() {
    const resp = await axios.get(url);
    for(let i=0; i < resp.data.length; i++) {
      let upvote = Math.floor(Math.random() * 100);
      resp.data[i].upvotes = upvote;
    }
    this.setState({
      breweries: resp.data
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
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
                }} />
        </main>
      </div>
    );
  }
}

export default withRouter(App);

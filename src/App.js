import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import { Route } from 'react-router-dom';

import Header from './components/Header';
import SignUp from './components/SignUp';
import Login from './components/Login';

const url = "https://api.openbrewerydb.org/breweries?by_city=decorah&per_page=50";

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      breweries: "",
      users: []
    }
  }

  handleSubmit = (e, userInfo) => {
    e.preventDefault();
    const users = this.state.users;
    users.push(userInfo);
    this.setState({
      users: users
    })
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
                   return <SignUp handleSubmit={this.handleSubmit} {...this.state} />
                 }}
          />
          <Route path="/login" component={Login} />
        </main>
      </div>
    );
  }
}

export default App;

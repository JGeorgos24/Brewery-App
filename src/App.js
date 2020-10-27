import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import { Route, withRouter } from 'react-router-dom';

import Header from './components/Home/Header';
import SignUp from './components/Login-SignUp/SignUp';
import Login from './components/Login-SignUp/Login';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import BreweryList from './components/Breweries/BreweryList';
import BreweryNearYou from "./components/Breweries/BreweryNearYou";
import BreweryContainer from "./components/Breweries/BreweryContainer";
import ProfileBreweries from './components/Profile/ProfileBreweries';
import HomePageDisplay from "./components/Home/HomePageDisplay";
import BeerContainer from "./components/Beers/BeerContainer";
import BeerList from "./components/Beers/BeerList";
import beers from "./beers.json";


const AllBreweriesURL = "https://api.openbrewerydb.org/breweries?by_city=&per_page=50";


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      breweries: "",
      beers: beers,
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
        ],
        userBeers: [
          "Bud Light", 
          "Busch Light"
        ]
      }],
      loggedIn: false,
      flag: false,
      error: "",
      // loggedInUser:[{}],
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
        ],
        userBeers: [
          "Bud Light", 
          "Busch Light"
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

  handleRemove = (brewId, flag) => {

    if(flag){
      const userBeers = this.state.loggedInUser.userBeers;
      const newBeers1 = userBeers.slice(0, brewId)
      const newBeers2 = userBeers.slice(brewId + 1, userBeers.length)
      const both = newBeers1.concat(newBeers2)
      const user = this.state.loggedInUser
      user.userBeers = both
      console.log(newBeers1)
      this.setState({
        loggedInUser: user
      })
    }
    else{
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
    // this.setState({
    //   loggedInUser: user
    // })
  }

  handleSignup = (e, userInfo) => {
    e.preventDefault();
    userInfo.userBrews = [];
    const users = this.state.users;
    let loggedInUser = this.state.loggedInUser;
    users.push(userInfo);
    loggedInUser.splice(0, 1, userInfo);
    console.log(loggedInUser);
    console.log(userInfo);
    this.setState({
      loggedInUser: loggedInUser[0],
      // loggedInUser: users[users.length - 1],
      loggedIn: true
    })
    console.log(this.state.loggedInUser);
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

  handleLogout = (e) => {
    e.preventDefault();
    let loggedInUser = this.state.loggedInUser
    loggedInUser=[{}];
    this.setState({
      loggedIn: false,
      loggedInUser
    })
    this.props.history.push('/CervezApp')
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
    console.log(this.state)
    return (
      <div className="App">
        <Header {...this.state} handleLogout={this.handleLogout}/>
        <main>
          <Route path="/CervezApp"
                    render={ (props) => {
                      return <HomePageDisplay {...this.state} />
                    }} 
          />

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
              return <BreweryContainer 
                      renderAllBreweries={this.renderAllBreweries} 
                      breweries={this.state.breweries}
                      {...this.props} 
                      {...this.state}
                      handleAdd = {this.handleAdd} /> 
            }} 
          />

          <Route path="/BreweryNearYou"
            render={ (props) => {
              return <BreweryContainer {...this.props} {...this.state}  /> 
            }} 
          />

          <Route path="/BeerList"
            render={ (props) => {
              return <BeerContainer 
                        beers={this.state.beers} 
                        {...this.props} 
                        {...this.state}  
                      /> 
            }} 
          />
  
        </main>
      </div>
    );
  }
}

export default withRouter(App);

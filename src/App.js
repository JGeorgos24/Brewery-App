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
import states from './states.json';


const AllBreweriesURL = "https://api.openbrewerydb.org/breweries?by_state=new_york&per_page=50";


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      breweries: "",
      beers: [],
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
          {
           name: "Bud Light" 
          },
          {
           name: "Busch Light" 
          } 
        ],
        userFavoriteBeers: [
          {
           name: "Bud Light" 
          },
          {
           name: "Busch Light" 
          },
          {
            name: "Coors Light" 
          }  
        ],
      }],
      loggedIn: false,
      flag: false,
      error: "",
      // loggedInUser:[{}],
      upvoteState: false,
      downvoteState: false,
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
          {
            name: "Bud Light" 
           },
           {
            name: "Busch Light" 
           } 
        ],
        userFavoriteBeers: [
          {
           name: "Bud Light" 
          },
          {
           name: "Busch Light" 
          },
          {
            name: "Coors Light" 
          }  
        ],
        userTriedBeer: [
          {
            name: "Bud Light" 
           },
           {
            name: "Busch Light" 
           },
           {
             name: "Coors Light" 
           } 
        ]
      }
    }
  }

  addFavoriteBeer = (brewId) => {
    const user = this.state.loggedInUser
    for(let i = 0; i < user.userFavoriteBeers.length; i++) {
      if(user.userFavoriteBeers.includes(this.state.loggedInUser.userBeers[brewId])) {
        alert('beer already in favorites list')
        return
      } 
    }
    user.userFavoriteBeers.push(this.state.loggedInUser.userBeers[brewId])
    this.setState({
      loggedInUser: user
    })
     this.props.history.push('/profile/beers')
  }

  addTriedBeer = (brewId) => {
    const user = this.state.loggedInUser
    for(let i = 0; i < user.userTriedBeer.length; i++) {
      if(user.userTriedBeer.includes(this.state.loggedInUser.userBeers[brewId])) {
        alert('beer already in favorites list')
        return
      }
    }
    user.userTriedBeer.push(this.state.loggedInUser.userBeers[brewId])
    this.setState({
      loggedInUser: user
    })
    this.props.history.push('/profile/beers')
  }

  removeTriedBeer = (brewId) => {
    const userTriedBeer = this.state.loggedInUser.userTriedBeer;
    const newBeers1 = userTriedBeer.slice(0, brewId)
    const newBeers2 = userTriedBeer.slice(brewId + 1, userTriedBeer.length)
    const both = newBeers1.concat(newBeers2)
    const user = this.state.loggedInUser
    user.userTriedBeer = both
    // console.log(newBeers1)
    this.setState({
      loggedInUser: user
    })
  }

  handleAdd = (brewId, flag) => {
    if(flag) {
      const user = this.state.loggedInUser
      user.userBeers.push(this.state.beers[brewId])
      console.log(this.state.beers[brewId])
      this.setState({
          loggedInUser: user
      }) 
      this.props.history.push('/profile/beers'); 
    }
    else{
      const user = this.state.loggedInUser
      user.userBrews.push(this.state.breweries[brewId])
      console.log(this.state.breweries[brewId])
      this.setState({
          loggedInUser: user
      }) 
      this.props.history.push('/profile/breweries');      
    }
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
  }

  removeFavoriteBeer= (brewId, flag) => {
    if(flag){
      const userFavoriteBeers = this.state.loggedInUser.userFavoriteBeers;
      const newBeers1 = userFavoriteBeers.slice(0, brewId)
      const newBeers2 = userFavoriteBeers.slice(brewId + 1, userFavoriteBeers.length)
      const both = newBeers1.concat(newBeers2)
      const user = this.state.loggedInUser
      user.userFavoriteBeers = both
      console.log(newBeers1)
      this.setState({
        loggedInUser: user
      })
    }
    // else{
    //   const userBrews = this.state.loggedInUser.userBrews;
    //   const newBrews1 = userBrews.slice(0, brewId)
    //   const newBrews2 = userBrews.slice(brewId + 1, userBrews.length)
    //   const both = newBrews1.concat(newBrews2)
    //   const user = this.state.loggedInUser
    //   user.userBrews = both
    //   console.log(newBrews1)
    //   this.setState({
    //     loggedInUser: user
    //   })
    // }
  }

  handleSignup = (e, userInfo) => {
    e.preventDefault();
    userInfo.userBrews = [];
    userInfo.userBeers = [];
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

  // async renderAllBreweries() {
  //   let resp;
  //   let totalResp = [];
  //   for(let i=0; i < states.length; i++) {
  //     resp = await axios.get(`https://api.openbrewerydb.org/breweries?by_state=${states[i]}&per_page=50`);
  //     for(let i=0; i < resp.data.length; i++) {
  //       let upvote = Math.floor(Math.random() * 100);
  //       resp.data[i].upvotes = upvote;
  //       resp.data[i].upvoteState = false;
  //       resp.data[i].downvoteState = false;
  //     }
  //     totalResp = totalResp.concat(resp.data);
  //   }
  //   console.log(totalResp);
  //   this.setState({
  //     breweries: totalResp,
  //     flag: true
  //   })
  // }

  async renderAllBreweries() {
    const resp = await axios.get(AllBreweriesURL);
    for(let i=0; i < resp.data.length; i++) {
      let upvote = Math.floor(Math.random() * 100);
      resp.data[i].upvotes = upvote;
      resp.data[i].upvoteState = false;
      resp.data[i].downvoteState = false;
    }
    this.setState({
      breweries: resp.data,
      flag: true
    })
  }
    

  handleUp = (brewId, flag) => {
    const breweries = this.state.breweries;
    // const upvoteState = !this.state.upvoteState
    console.log(flag)
    if (!flag) {
      breweries[brewId].upvotes ++;
      breweries[brewId].upvoteState = !flag
    this.setState({
      breweries
    })} else {
      breweries[brewId].upvotes --;
      breweries[brewId].upvoteState = !flag
    this.setState({
      breweries
    })}
    }
    
  handleDown = (brewId, flag) => {
    const breweries = this.state.breweries;
    if (!flag) {
      breweries[brewId].upvotes --;
      breweries[brewId].downvoteState = !flag
    this.setState({
      breweries
    })} else {
      breweries[brewId].upvotes ++;
      breweries[brewId].downvoteState = !flag
    this.setState({
      breweries
    })}
  }

  handleUpBeer = (brewId, flag) => {
    const beers = this.state.beers;
    // const upvoteState = !this.state.upvoteState
    console.log(flag)
    if (!flag) {
      beers[brewId].upvotes ++;
      beers[brewId].upvoteState = !flag
    this.setState({
      beers
    })} else {
      beers[brewId].upvotes --;
      beers[brewId].upvoteState = !flag
    this.setState({
      beers
    })}
    }
    
  handleDownBeer = (brewId, flag) => {
    const beers = this.state.beers;
    if (!flag) {
      beers[brewId].upvotes --;
      beers[brewId].downvoteState = !flag
    this.setState({
      beers
    })} else {
      beers[brewId].upvotes ++;
      beers[brewId].downvoteState = !flag
    this.setState({
      beers
    })}
  }

  renderAllBeers() {   
     const beerList = beers;    
     const beerArray = [];    
    for(let i=0; i < beerList.length; i++) {      
      const beerObject = {};      
      let upvote = Math.floor(Math.random() * 100);      
      beerObject.name = beerList[i];      
      beerObject.upvotes = upvote;      
      beerObject.upvoteState = false;      
      beerObject.downvoteState = false;      
      beerArray.push(beerObject)    
    }    
      this.setState({      
        beers: beerArray    
      })  
  }

  componentDidMount() {
    this.renderAllBreweries();
    this.renderAllBeers();
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
                  return <Profile 
                    {...this.state} 
                    handleRemove = {this.handleRemove}
                    addFavoriteBeer = {this.addFavoriteBeer}
                    removeFavoriteBeer={this.removeFavoriteBeer}
                    addTriedBeer = {this.addTriedBeer}
                    removeTriedBeer = {this.removeTriedBeer}
                  />
                }} 
          />

          <Route path="/BreweryList"
            render={ (props) => {
              return <BreweryContainer 
                      renderAllBreweries={this.renderAllBreweries} 
                      breweries={this.state.breweries}
                      {...this.props} 
                      {...this.state}
                      upvoteState={this.state.upvoteState}
                      downvoteState={this.state.downvoteState}
                      handleAdd = {this.handleAdd}
                      handleUp = {this.handleUp} 
                      handleDown = {this.handleDown}/> 
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
                        handleAdd = {this.handleAdd} 
                        {...this.props} 
                        {...this.state}
                        handleUpBeer = {this.handleUpBeer} 
                        handleDownBeer = {this.handleDownBeer}  
                      /> 
            }} 
          />
  
        </main>
      </div>
    );
  }
}

export default withRouter(App);

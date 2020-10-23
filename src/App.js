import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const url = "https://api.openbrewerydb.org/breweries?by_city=decorah&per_page=50";

// let upvote = Math.floor(Math.random() * 100);

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      breweries: ""
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
    console.log(this.state.breweries);
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;

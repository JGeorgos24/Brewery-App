import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled, {keyframes} from "styled-components";

class Game2 extends Component{
    constructor(props){
      super(props);
      this.state = {
        spin: false,
        spinDeg: 0,
      }
    }  
    
    spinBottle(){
        let spinDeg= this.state.spinDeg
        spinDeg =  720 + (Math.floor(Math.random() * 361));
        this.setState({
            spin: true,
            spinDeg
        })
    }


    render(){
      const { rotation } =  this.state;

      const rotate360 = keyframes`
        from {
            transform: rotate(0deg);
        }

        to{
            transform:rotate(${this.state.spinDeg}deg);
        }
      `
      const RotatingBeer = styled.div`
        animation: ${rotate360} 5s 1;
        width: 150px;
        height: 150px;
        margin:10px;
        display:flex;
        align-items: center;
        justify-content: center;
        transform: rotate(${this.state.spinDeg}deg)
      `
      return(
          <div className="Game2">
              <h1>Spin -N- Drink</h1> 
              <p>If the tip of the bottle lands pointing towards the direction you are located you must take a drink for 5 seconds.</p>

              <button className="beerSpinButton" onClick={() => {this.spinBottle()}}>Spin</button> 

            {this.state.spin &&
                <RotatingBeer > 
                    <img className="BeerBottle" src="https://i.imgur.com/mPS5RYj.png" alt="beerbottle"></img>
                </RotatingBeer>  
            }

          </div>
      ) 
    }
}

export default Game2;
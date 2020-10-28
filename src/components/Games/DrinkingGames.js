import React from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Game1 from "./Game1"
import BACCalculator from './BACCalculator';

const Games = (props) => {
    return(
        <div className="Games">
                <Link to="/Games">Drinking Games</Link>
            <nav>
                <Link to="/Games/Game1">Game 1</Link> 
                
                <Link to="/Games/Game2">Game 2</Link>

                <Link to="/Games/bacCalculator">BAC Calculator</Link>
            </nav>

            <main>
            <Route path="/Games/Game1"
                    render={ (props) => {
                        return <Game1/> 
                }} />
            <Route path="/Games/bacCalculator"
                    render={ (props) => {
                        return <BACCalculator/> 
                }} />
            </main>
        </div>
    )
}

export default Games;
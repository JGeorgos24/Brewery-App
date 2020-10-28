import React from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Game1 from "./Game1"

const Games = (props) => {
    return(
        <div className="Games">
                <Link to="/Games">Drinking Games</Link>
            <nav>
                <Link to="/Games/Game1">Game 1</Link> 
                
                <Link to="/Games/Game2">Game 2</Link>
            </nav>

            <main>
            <Route path="/Games/Game1"
                    render={ (props) => {
                        return <Game1/> 
                }} />
            </main>
        </div>
    )
}

export default Games;
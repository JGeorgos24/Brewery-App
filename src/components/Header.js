import React from 'react';
import Home from './Home';
import {Link} from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <header>
                <Link className="CervezAppTitle" to="/CervezApp">CervezApp</Link>
                <nav className="SignUp-LogIn">
                        {!props.loggedIn && <Link className="SignUp-LogIn" to="/signup">Sign Up</Link>}
                        {!props.loggedIn && <Link className="SignUp-LogIn" to="/login">Login</Link>}
                    </nav> 
                
            </header> 

            <nav>
                <Home {...props}/>    
            </nav>           
        </div>

    )
}

export default Header;
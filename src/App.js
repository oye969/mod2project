import React from 'react';
import '.App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact';
import Createaccount from './components/Createaccount';
import Download from './components/Download';
import Licensing from './components/Licensing';
import Subscription from './components/Subscription';
import Signin from './components/Signin';


function App() {
    return(
        <Router>
            <div>
                <nav className="nav-bar">
                    <Link to='/'>Home</Link>
                </nav>
            </div>
        </Router>
    )
}
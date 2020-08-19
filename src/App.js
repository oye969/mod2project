import React from 'react';
import './App.css';
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
                <switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/Download' component={Download}/>
                    <Route path='/Licensing' component={Licensing}/>
                    <Route path='/Subscription' component={Subscription}/>
                    <Route path='/Contact' component={Contact}/>
                    <Route path='/Create Account' component={Createaccount}/>
                    <Route path='/Sign in' component={Signin}/>

                    <Redirect path='/'/>
                </switch>
            </div>
        </Router>
    );
}

export default App;
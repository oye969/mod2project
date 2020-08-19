import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact';
import Createaccount from './components/Createaccount';
import Listentomusic from './components/Listentomusic';
import Licensing from './components/Licensing';
import Subscription from './components/Subscription';
import Signin from './components/Signin';


function App() {
    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/Listen to Music' component={Listentomusic}/>
                    <Route path='/Licensing' component={Licensing}/>
                    <Route path='/Subscription' component={Subscription}/>
                    <Route path='/Contact' component={Contact}/>
                    <Route path='/Createaccount' component={Createaccount}/>
                    <Route path='/Signin' component={Signin}/>

                    <Redirect path='/'/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
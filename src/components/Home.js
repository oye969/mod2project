import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'





function Home() {
  return (
    <div className="App-wrapper">
      <div className="Header-top">
        <h1>MUZIKI</h1>
        <h2>...refreshing the SOUL!</h2>
      </div>
        <div>
            <ul className="nav-bar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Listentomusic">Listen to Music</Link></li>
                <li><Link to="/Licensing">Licensing</Link></li>
                <li><Link to="/Subscription">Subscription</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/Createaccount">Create Account</Link></li>
                <li><Link to="/Signin">Sign in</Link></li>
            </ul>
        </div>
        <div>
          <img className= "img-display" src="/images/a1.jpg" alt="img" />
          <img className= "imgb-display" src="/images/b1.jpg" alt="img" />
          <img className= "img-display" src="/images/e1.jpg" alt="img" />
          <img className= "imgb-display" src="/images/c1.jpg" alt="img" />
        </div>
        <div className="display-songs">

        </div>
    </div>
  );
}

export default Home;
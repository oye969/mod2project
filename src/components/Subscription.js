import React from 'react';
import {
  Link,
} from 'react-router-dom'





function Subscription() {
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
        <div className="display-songs">
            <h3>SUBSCRIPTION</h3>
            <h4>
            A subscription is a signed agreement between a supplier and customer that the customer will receive  and provide payment for regular products or services, usually for a one-year period. A subscription is a relatively new business model by which a customer agrees to pay the company for products or services throughout a specified time-period. For example, the customer may agree to purchase a one-year subscription to a magazine which he receives on a regular basis (monthly, weekly, etc.).
            </h4>

        </div>
        <div>
          <img className= "img-display" src="/images/a1.jpg" alt="img" />
          <img className= "imgb-display" src="/images/b1.jpg" alt="img" />
          <img className= "img-display" src="/images/e1.jpg" alt="img" />
          <img className= "imgb-display" src="/images/c1.jpg" alt="img" />
        </div>
    </div>
  );
}

export default Subscription;
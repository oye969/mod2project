import React from 'react';
import {
  Link,
} from 'react-router-dom'





function Licensing() {
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
            <h3>LICENSING</h3>
            <h4>
            Performance licenses, including blanket licenses, are considered nonexclusive. This means that a PRO can give out licenses for the same catalogue of music to multiple organizations. In some cases, a copyright holder may decide to negotiate exclusivity with their PRO, or a business can negotiate a license for a specific musician’s or composer’s work directly with the artist. However, access to a wide range of music that can be chosen by the business owner based on mood, brand, and personal taste is one important reason PROs remain in charge of copyrights.
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

export default Licensing;
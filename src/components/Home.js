import React from 'react';
import './App.css';




function Home() {
  return (
    <div className="App-wrapper">
      <div className="Header-top">
        <h1>MUZIKI</h1>
        <h2>...refreshing the SOUL!</h2>
      </div>
        <div>
            <ul className="nav-bar">
                <li><a href="#">Home</a></li>
                <li><a href="#">Download</a></li>
                <li><a href="#">Licensing</a></li>
                <li><a href="#">Subscription</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Create Account</a></li>
                <li><a href="#">Sign in</a></li>
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
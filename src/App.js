import React from 'react';
import './App.css';




function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>MUZIKI</h1>
        <h2>...refreshing the SOUL!</h2>
      </div>
        <div>
            <ul className="nav">
                <li><a href="#">Download</a></li>
                <li><a href="#">Licensing</a></li>
                <li><a href="#">Subscription</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Create Account | Sign in</a></li>
            </ul>
        </div>
        <div>
        <img className= "img" src="/images/a1.jpg" alt="img" />
        <img className= "imgb" src="/images/b1.jpg" alt="img" />
        <img className= "img" src="/images/e1.jpg" alt="img" />
        <img className= "imgb" src="/images/c1.jpg" alt="img" />
        </div>
        <div className="display">

        </div>
    </div>
  );
}

export default App;

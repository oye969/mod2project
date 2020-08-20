import React from 'react';
import {
  Link,
} from 'react-router-dom'



class Listentomusic extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {

    };
    
  }
    async componentDidMount() {
    const cors = "https://cors-anywhere.herokuapp.com/";
    const url = ("https://openwhyd.github.io/openwhyd/API");
    const response = await fetch(cors + url);
    const data = await response.json();
    console.log(data);
    this.setState ({songs: data});
  }
  
  render() {
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
            <h3>PLAY SONG</h3>
            <h4>
            To create an account you need a valid email address. To receive text messages you need to a valid mobile phone number. Select the topics you're interested in and we'll send you the updates. You'll receive a confirmation notice afterwards, and you can easily update your preferences anytime.
            </h4>
            <button>Play Song</button>
        </div>
      </div>
    );
  }
}
 

  

export default Listentomusic;
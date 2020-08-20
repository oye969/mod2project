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
            <h3>CREATE ACCOUNT</h3>
        </div>
      </div>
    );
  }
}
 

  

export default Listentomusic;
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
              Have you ever thought about how many songs with choose in   the title have been written? This list ranks the best   songs with choose in the name, regardless of genre. Most  of the tracks listed here are songs about choosing, but  almost all of them have different lyrical interpretations,   despite the commonality of having the word choose in the  title.
            </h4>
            <button>Play Song</button>
        </div>
      </div>
    );
  }
}
 

  

export default Listentomusic;
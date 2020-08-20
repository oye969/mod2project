import React from 'react';


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
        
      </div>
    );
  }
}
 

  

export default Listentomusic;
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
    this.setState ({ songs: data});
  }
  
  render() {
    return (
        <div>
          <h1>
            Listen To Music!
          </h1>

        </div>
    );
  }
}
 

  

export default Listentomusic;
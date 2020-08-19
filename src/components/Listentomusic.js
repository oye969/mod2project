

import React from 'react';


class Listentomusic extends React.Component {
  constructor(props) {
    super(props) 
    
  }
    state = {
    songs: []

    };
    async componentDidMount() {
    const url = ("https://openwhyd.github.io/openwhyd/API");
    const response = await fetch(url);
    const data = await response.json();
    this.setState ({ songs: data});
  }
  
  render() {
    return (
        <div>

        </div>
    );
  }
}
 

  

export default Listentomusic;


import React from 'react';


class Listentomusic extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {
        
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

    )
  }
 
 

  

export default Listentomusic;
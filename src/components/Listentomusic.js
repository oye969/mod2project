import React from 'react';

import axios from 'axios';


class App extends React.Component {
  constructor() {
    super() 
      this.state = {
        data: [],
        loading: true
      
    }
  }
 
  componentDidMount() {

    let one = 'https://anapioficeandfire.com/api/characters/16'
    let two = 'https://www.anapioficeandfire.com/api/houses/378'
    let three = 'https://www.anapioficeandfire.com/api/houses/229'
    let four = 'https://www.anapioficeandfire.com/api/houses/17'
    let five = 'https://www.anapioficeandfire.com/api/characters/901'
    let six = 'https://www.anapioficeandfire.com/api/houses/362'
    let seven = 'https://www.anapioficeandfire.com/api/characters/232'
    
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);
    const requestFour = axios.get(four);
    const requestFive = axios.get(five);
    const requestSix = axios.get(six);
    const requestSeven = axios.get(seven);
    
    axios
        .all ([requestOne, requestTwo, requestThree, requestFour, requestFive, requestSix, requestSeven])
        .then(axios.spread((...responses) => {
          
          let endpoint = responses[5].data.founder
          console.log(endpoint)
    axios
        .get(endpoint)
        .then(data => {
          let stateCopy = [...this.state.data]
          stateCopy[5] = data.data.name
          console.log(data.data.name)
          this.setState({data:stateCopy, loading:false})
        })

      this.setState({data:[...responses]})
      console.log([...responses])


    }))
    .catch(errors => {
      console.log(errors);
    });

  }
  
render() {
  return (
    <div className="App">
      <h1>1. Where was Margaery Tyrell born?</h1>
      <h2>Answer: <br></br>{!this.state.loading ? this.state.data[0].data.born: ''}</h2><br></br>
      <h1>2. What region is House Targaryen in?</h1>
      <h2>Answer: <br></br>{!this.state.loading ? this.state.data[1].data.region: ''}</h2><br></br>
      <h1>3. What's the coat of arms of House Lannister?</h1>
      <h2>Answer: <br></br>{!this.state.loading ? this.state.data[2].data.coatOfArms: ''}</h2><br></br>
      <h1>4. What is the second seat of House Baratheon?</h1>
      <h2>Answer: <br></br>{!this.state.loading ? this.state.data[3].data.seats: ''}</h2><br></br>
      <h1>5. What is Robert Baratheon's second alias?</h1>
      <h2>Answer: <br></br>{!this.state.loading ? this.state.data[4].data.aliases: ''}</h2><br></br>
      <h1>6. What's the name of the founder of House Stark?</h1>
      <h2>Answer: <br></br>{!this.state.loading ? this.state.data[5]: ''}</h2><br></br>
      <h1>7.What are the titles of Catelyn Stark's three POV books?</h1>
      <h2>Answer: <br></br>{!this.state.loading ? this.state.data[6].data.povBooks: ''}</h2><br></br>
    </div>
  );
}
}



export default App;

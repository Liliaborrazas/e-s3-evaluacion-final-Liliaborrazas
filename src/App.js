import React, { Component } from 'react';
import './App.css';

const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';


class App extends Component {
  constructor(props){
    super(props)
  };

  componentDidMount(){
    fetch(ENDPOINT)
    .then(response=> response.json())
    .then(data=>{
      console.log(data)
    })

  }
  render() {
    return (
      <div className="app">
        
      </div>
    );
  }
}

export default App;

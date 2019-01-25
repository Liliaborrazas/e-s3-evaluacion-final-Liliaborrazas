import React, { Component } from 'react';
import { fetchHarry } from './services/harryService';
import './App.css';




class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    fetchHarry
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

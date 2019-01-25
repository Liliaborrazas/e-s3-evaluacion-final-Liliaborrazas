import React, { Component } from 'react';
import { fetchHarry } from './services/harryService';
import './App.css';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      harry:[],
      filter: ""
    }
    
  }

  componentDidMount(){
    fetchHarry
    .then(data=>{
       const dataHarry = data.map((item, index)=>{
         return {...item, id: index };
       });
      this.setState({harry:dataHarry})
      }
    )};

    filterPerson(e){
      const author = e.currentTarget.value;
      this.setState({filter:author});
    };
  
    filterInput(){
      const harry = this.state.harry;
      const filter = this.state.filter;
      return harry.filter(item=>
        item.name.includes(filter)
      )
    }
     
  render() {
    return (
      <div className="app">
        <header>
          <div className="input-page">
           <h1>Harry Potter characters</h1>
           <input type="text" className="input" placeholder="Escribe tu personaje"/>
         </div>
        </header>
        <main>
          <div>
            <ul className="list-person">
            {this.filterInput().map((item, index)=>{
          return(<li className="card-item" key={index}>
          <div className="card-harry_list">
          <h4>{item.name}</h4>
          <img src={item.image} alt={item.name}/>
          <p className="houseItem">{item.house}</p>
          </div>
        </li>)
        })}
        </ul>)
          </div>
        </main>
      </div>
      
    );
  }
}

export default App;

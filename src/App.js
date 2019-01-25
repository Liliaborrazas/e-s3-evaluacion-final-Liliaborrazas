import React, { Component } from 'react';
import { fetchHarry } from './services/harryService';
import CharacterList from './components/CharacterList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      harry:[],
      filter: ""
    }
    this.filterInput=this.filterInput.bind(this); 
    this.filterPerson=this.filterPerson.bind(this);
    
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
        item.name.toLowerCase().includes(filter.toLowerCase())
      )
    }
     
  render() {
    return (
      <div className="app">
        <header>
          <div className="input-page">
           <h1 className="title-page">Harry Potter characters</h1>
           <input type="text" className="input" placeholder="Escribe tu personaje" onKeyUp={this.filterPerson}/>
         </div>
        </header>
        <main>
          <div>
            <CharacterList filterInput={this.filterInput()}/>
          </div>
        </main>
      </div>
      
    );
  }
}

export default App;

import React, { Component } from 'react';
import { fetchHarry } from './services/harryService';
import CharacterList from './components/CharacterList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      harry:[],
      filter: "",
      house: ""
    };
    this.filterInput=this.filterInput.bind(this); 
    this.filterPerson=this.filterPerson.bind(this);
    this.filterHouse=this.filterHouse.bind(this);
  }

  componentDidMount(){
    fetchHarry()
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
      );
    }
     
  filterHouse(e){
    const newHouse = e.currentTarget.value;
    this.setState({house:newHouse});
  }

  filterInputHouse(){
    const harry = this.state.harry;
    const house = this.state.house;
    if(house === 'no'){
      return harry.filter(item=>
        item.house === "");
    }else{
      return harry.filter(item =>
        item.house.toUpperCase().includes(house.toUpperCase())
        
      );
    }
  }
  render() {
    return (
      <div className="app">
        <header>
          <div className="input-page">
           <h1 className="title-page">Harry Potter characters</h1>
           <input type="text" className="input" placeholder="Escribe tu personaje" onKeyUp={this.filterPerson}/>
           <input type="text" className="inputHouse" placeholder="Escribe tu casa" onKeyUp={this.filterHouse}/>
         </div>
        </header>
        <main>
          <div className="character-list">
            <CharacterList filterInput={this.filterInputHouse()} />
          </div>
        </main>
      </div>
      
    );
  }
}

export default App;

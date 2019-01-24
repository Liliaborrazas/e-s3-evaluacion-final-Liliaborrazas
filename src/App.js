import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

class App extends Component {
  constructor(props){
    super(props);
    this.state={ 
      harry:[],
      filter: ""
      
    }
  this.filterInput=this.filterInput.bind(this); 
  this.filterPerson=this.filterPerson.bind(this); 
  };
  
  componentDidMount() {
    fetch(ENDPOINT)
     .then(response => response.json())
      .then(data=>{
        const dataHarry = data.map((item, index)=>{
          return{...item, id:index};
        });
        this.setState({harry:dataHarry})
  }); 
};

  filterPerson(e){
    const author = e.currentTarget.value;
    this.setState({filter:author});


  }
  filterInput(){
    const harry = this.state.harry;
    const filter = this.state.filter;
    return harry.filter(item=>
      item.name.toUpperCase().includes(filter.toUpperCase())
     
    )

  }
  render() {
     return (
       <div className="app">
       <header>
         <div>
           <h1>Harry Potter characters</h1>
           <input type="text" className="input" placeholder="escribe tu personaje" onKeyUp={this.filterPerson}/>
         </div>
       </header>
       <main>
         <CharacterList filterInput={this.filterInput()}/>
       </main>
       </div>
     );
   }
 };


export default App;

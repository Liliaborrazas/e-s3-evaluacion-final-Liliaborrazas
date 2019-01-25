import React, { Component } from 'react';
import CharacterCard from './CharacterCard';

class CharacterList extends Component {
    render(){
      return(
      <ul className="list-person">
        {this.props.filterInput.map((item, index)=>{
         return(
           <li className="card-item" key={index}>
            <CharacterCard item={item}/>
           </li>)
        })}
      </ul>)

    }
}

export default CharacterList;
import React, { Component } from 'react';

class CharacterList extends Component {
    render(){
        return(<ul className="list-person">
        {this.props.filterInput.map((item, index)=>{
      return(<li className="card-item" key={index}>
      <div className="card-harry_list">
      <h4>{item.name}</h4>
      <img src={item.image} alt={item.name}/>
      <p className="houseItem">{item.house}</p>
      </div>
    </li>)
    })}
    </ul>)

    }
}

export default CharacterList;
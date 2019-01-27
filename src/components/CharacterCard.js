import React, { Component } from 'react';


class CharacterCard extends Component {
    render(){
      return(
        <div className="card-harry_list">
        <div className="image-card">
        <img className="card-img" src={this.props.item.image} alt={this.props.item.name}/>   
        </div>
        <h4 className="card-name">{this.props.item.name}</h4>
        <p className="card-house">{this.props.item.house}</p>
       </div>
      )

    }
}

export default CharacterCard;
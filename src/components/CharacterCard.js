import React, { Component } from 'react';

class CharacterCard extends Component{
    render(){
        
        return(
        <div className="card-harry_list">
        <h4>{this.props.item.name}</h4>
        <img src={this.props.item.image} alt={this.props.item.name}/>
        <p className="houseItem">{this.props.item.house}</p>
        </div>)

    }
}
export default CharacterCard;
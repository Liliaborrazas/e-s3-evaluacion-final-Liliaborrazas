import React, { Component } from 'react';

class CharacterCard extends Component{
    render(){
        
        return(
        <div className="card-harry_list">
        <img className="card-image" src={this.props.item.image} alt={this.props.item.name}/>
        <div className="card-data">
        <h4 className="card-name">{this.props.item.name}</h4>
        <p className="houseItem">{this.props.item.house}</p>
        </div>
        </div>)

    }
}
export default CharacterCard;
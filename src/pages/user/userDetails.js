import React from 'react';
import './user.css';

export default class UserDetails extends React.Component {

  render(){
    return(
      <div className="text-center center-block user-detail">
        <img
          src={this.props.photo}
          alt={this.props.name}
          width="200"
          height="200"
          className="img-responsive img-circle dp"
        />
        <h2>{this.props.name}</h2>
        <h3>{this.props.course}</h3>
        <h4><img src={require('./badge.svg')} width="25px" alt="points" /> {this.props.score} <i>pts</i></h4>
      </div>
    );
  }
}

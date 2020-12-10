import React from 'react';
import {Link} from 'react-router-dom';
import './leaders.css';

class Topper extends React.Component {
  componentWillMount(){
    this.state = {
      to:"/user/"+this.props.rollNo
    }
  }
  render(){
    return(
      <div className="col-md-12 ldr">
        <div className="ldr-img">
          <img src={this.props.imgSrc} className="img-circle img-responsive" alt={this.props.name} />
        </div>
        <label ><Link to={this.state.to}>{this.props.name}</Link></label><br/>
        <label>{this.props.score} pts</label>
      </div>
    );
  }
}

export default Topper;

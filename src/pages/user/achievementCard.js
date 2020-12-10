import React from 'react';
import './user.css';

export default class AchievementCard extends React.Component {
  componentWillMount(){
    this.state={
      classes:" col-md-12 desc-card ".concat(this.props.category)
    }
  }
  render() {
    return(
      <div className={this.state.classes}>
        <span className="score-badge">{this.props.score}</span>
        <p>{this.props.desc}</p>
        <span className="timeperiod"><img src="/media/calendar.svg" alt="calendar" /> {this.props.month} {this.props.year}</span>
      </div>
    );
  }
}

import React from 'react';
import 'bootstrap';
import './header.css';

export default class Header extends React.Component {
  render() {
    return(
      <header>
        <img className="img-responsive" src="/media/achvrs.jpg" alt="Achievements" width="100%" height="500" />
      </header>
    );
  }
}

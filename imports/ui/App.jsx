import React, { Component } from 'react';
import NavLink from './NavLink'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>React Meteor Questions</h1>
          <ul role="nav">
            <li><NavLink to="/" onlyActiveOnIndex>Questions</NavLink></li>
            <li><NavLink to="/new">Create Question</NavLink></li>
          </ul>
        </header>
        {this.props.children}
      </div>
    );
  }
}

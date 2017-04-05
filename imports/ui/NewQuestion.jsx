import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Questions } from '../api/questions.js';

export default class NewQuestion extends Component {
  handleSubmit(event) {
    event.preventDefault();

    const content = ReactDOM.findDOMNode(this.refs.textContent).value.trim();

    Questions.insert({
      content,
      createdAt: new Date(),
    });

    ReactDOM.findDOMNode(this.refs.textContent).value = '';
  }

  render() {
    return (
      <div className="container">
        <h2>Hi! I am New Question!</h2>

        <form onSubmit={this.handleSubmit.bind(this)} >
          <input
            type="text"
            ref="textContent"
            placeholder="Type to add new question"
          />
        </form>
      </div>
    );
  }
}

import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Answers } from '../api/answers.js';

export default class NewAnswer extends Component {
  handleSubmit(event) {
    event.preventDefault();

    const content = ReactDOM.findDOMNode(this.refs.textContent).value.trim();
    const question_id = this.props.params.id

    Meteor.call('answers.insert', content, question_id);

    ReactDOM.findDOMNode(this.refs.textContent).value = '';
  }

  render() {
    return (
      <div className="container">
        <h2>Hi! I am New Answer!</h2>

        <form onSubmit={this.handleSubmit.bind(this)} >
          <input
            type="text"
            ref="textContent"
            placeholder="Type to add new answer"
          />
        </form>
      </div>
    );
  }
}

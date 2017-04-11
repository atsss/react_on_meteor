import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Answers } from '../api/answers.js';

import Answer from './Answer.jsx';

class AnswerIndex extends Component {
  renderAnswers() {
    return this.props.answers.map((answer) => (
      <Answer
        key={answer._id}
        answer={answer}
      />
    ));
  }

  render() {
    return (
      <div className="container">
        <h2>Hi! I am Answer Index!</h2>

        <ul>
          {this.renderAnswers()}
        </ul>
      </div>
    );
  }
}

AnswerIndex.propTypes = {
  answers: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    answers: Answers.find({ content: { $exists: true }}).fetch(),
  };
}, AnswerIndex);

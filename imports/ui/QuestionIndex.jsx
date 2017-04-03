import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Questions } from '../api/questions.js';

import Question from './Question.jsx';

class QuestionIndex extends Component {
  renderQuestions() {
    return this.props.questions.map((question) => (
      <Question key={question._id} question={question} />
    ));
  }

  render() {
    return (
      <div className="container">
        <h2>Hi! I am Question Index!</h2>

        <ul>
          {this.renderQuestions()}
        </ul>
      </div>
    );
  }
}

QuestionIndex.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    questions: Questions.find({ content: { $exists: true }}).fetch(),
  };
}, QuestionIndex);

import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Questions } from '../api/questions.js';

import Question from './Question.jsx';

class QuestionIndex extends Component {
  deleteThisQuestion(id) {
    Meteor.call('questions.remove', id);
  }

  renderQuestions() {
    return this.props.questions.map((question) => (
      <Question
        key={question._id}
        question={question}
        deleteThisQuestion={(id) => this.deleteThisQuestion(id)}
      />
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

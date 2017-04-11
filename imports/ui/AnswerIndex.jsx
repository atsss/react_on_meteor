import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

export default class AnswerIndex extends Component {
  render() {
    return (
      <div className="container">
        <h2>Hi! I am Answer Index!</h2>
      </div>
    );
  }
}

//QuestionIndex.propTypes = {
//  questions: PropTypes.array.isRequired,
//};
//
//export default createContainer(() => {
//  return {
//    questions: Questions.find({ content: { $exists: true }}).fetch(),
//  };
//}, QuestionIndex);

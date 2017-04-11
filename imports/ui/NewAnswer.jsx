import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

export default class NewAnswer extends Component {
  render() {
    return (
      <div className="container">
        <h2>Hi! I am New Answer!</h2>
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

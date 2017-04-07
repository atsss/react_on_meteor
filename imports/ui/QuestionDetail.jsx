import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Questions } from '../api/questions.js';

class QuestionDetail extends Component {
  render() {
    console.log(this.props.question, 'component question');
    return (
      <div className="container">
        <h2>Hi! I am Question Detail!</h2>
        <p>id: {this.props.question._id}</p>
        <p>content: {this.props.question.content}</p>
      </div>
    );
  }
}

QuestionDetail.propTypes = {
  question: PropTypes.object.isRequired,
};

export default createContainer(({ params }) => {
  console.log(params, 'createcontainer params');
  return {
    question: Questions.findOne(params.id),
  };
}, QuestionDetail);

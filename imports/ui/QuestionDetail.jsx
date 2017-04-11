import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import NavLink from './NavLink';

import { Questions } from '../api/questions.js';

class QuestionDetail extends Component {
  render() {
    return (
      <div className="container">
        <h2>Hi! I am Question Detail!</h2>
        <p>id: {this.props.question._id}</p>
        <p>content: {this.props.question.content}</p>

        <ul>
          <li><NavLink to={'/questions/'+this.props.question._id+'/answers'}>Answers</NavLink></li>
          <li><NavLink to={'/questions/'+this.props.question._id+'/answers/new'}>Create Answer</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

QuestionDetail.propTypes = {
  question: PropTypes.object.isRequired,
};

export default createContainer(({ params }) => {
  return {
    question: Questions.findOne(params.id) || {},
  };
}, QuestionDetail);

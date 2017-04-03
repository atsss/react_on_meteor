import React, { Component, PropTypes } from 'react';

export default class Question extends Component {
  render() {
    return (
      <li>{this.props.question.content}</li>
    );
  }
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
};

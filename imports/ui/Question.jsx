import React, { Component, PropTypes } from 'react';

export default class Question extends Component {
  render() {
    return (
      <li>
        {this.props.question.content}
        <button onClick={(event) => {
          event.preventDefault();
          this.props.deleteThisQuestion(this.props.question._id);
        }}>
          &times;
        </button>
      </li>
    );
  }
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  deleteThisQuestion: PropTypes.func.isRequired,
};

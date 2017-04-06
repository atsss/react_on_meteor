import React, { Component, PropTypes } from 'react';
import NavLink from './NavLink';

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
        <NavLink to={'/questions/'+this.props.question._id}>More Detail</NavLink>
      </li>
    );
  }
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  deleteThisQuestion: PropTypes.func.isRequired,
};

import React, { Component, PropTypes } from 'react';

export default class Answer extends Component {
  render() {
    return (
      <li>
        {this.props.answer.content}
      </li>
    );
  }
}

Answer.propTypes = {
  answer: PropTypes.object.isRequired,
};

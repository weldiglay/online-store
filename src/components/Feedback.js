import React from 'react';
import PropTypes from 'prop-types';

class Feedback extends React.Component {
  render() {
    const { feedback } = this.props;
    return (
      <div>
        <h5>{ feedback.email }</h5>
        <p>{ feedback.index }</p>
        <p>{ feedback.evaluation }</p>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedback: PropTypes.shape({
    email: PropTypes.string,
    index: PropTypes.string,
    evaluation: PropTypes.string,
  }).isRequired,
};

export default Feedback;

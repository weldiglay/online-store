import React from 'react';
import PropTypes from 'prop-types';
import '../css/Feedback.css';

class Feedback extends React.Component {
  render() {
    const { feedback } = this.props;
    return (
      <div className="avaliacaoFeita">
        <h5>{ feedback.email }</h5>
        <p>{ `Nota: ${feedback.index}` }</p>
        <br />
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

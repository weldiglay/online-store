import React from 'react';
import PropTypes from 'prop-types';

class ProductAtributes extends React.Component {
  render() {
    const { atributes } = this.props;
    return (
      <div>
        <p>{`${atributes.name}: ${atributes.value_name}`}</p>
      </div>
    );
  }
}

ProductAtributes.propTypes = {
  atributes: PropTypes.shape({
    name: PropTypes.string,
    value_name: PropTypes.string,
  }).isRequired,
};

export default ProductAtributes;

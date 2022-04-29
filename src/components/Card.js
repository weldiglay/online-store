import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { arrayProduct } = this.props;
    console.log('products', arrayProduct);
    return (
      <div>
        <h4>Selecione um Categoria</h4>
        {arrayProduct.map(({ product }) => (
          <Link
            to={ `/details/${product.id}` }
            data-testid="product-detail-link"
            key={ product.id } >
            <div data-testid = "product">
              <h4>{product.title}</h4>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{ product.price }</p>
            </div>
          </Link>

        )) }
      </div>
    );
  }
}

Card.propTypes = {
  arrayProduct:
  PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string })).isRequired,
};
export default Card;

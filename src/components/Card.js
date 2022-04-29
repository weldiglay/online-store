import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addItem } from '../services/itensCart';

class Card extends Component {
  addProductToCart(value) {
    addItem(value);
  }

  render() {
    const { arrayProduct } = this.props;
    return (
      <div>
        {arrayProduct.map((product) => (
          /* remoção de desestruturação para pegar o objeto inteiro do produto */
          <section key={ product.id } data-testid="product">
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{ product.title }</p>
            <span>{ product.price }</span>
            <Link
              to={ `/ProductDetail/${product.id}` }
              data-testid="product-detail-link"
            >
              <button type="button">Details</button>
            </Link>
            <button
              data-testid="product-add-to-cart"
              type="button"
              onClick={ () => { this.addProductToCart(product); } }
            >
              Add To Cart
            </button>
          </section>
        )) }
      </div>
    );
  }
}

Card.propTypes = {
  arrayProduct: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Card;

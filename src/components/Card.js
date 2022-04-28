import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { arrayProduct } = this.props;
    return (
      <div>
        <h4>Selecione um Categoria</h4>
        {arrayProduct.map(({ id, thumbnail, price, title }) => (
          <section key={ id } data-testid="product">
            <img src={ thumbnail } alt={ title } />
            <p>{ title }</p>
            <Link to={ `/ProductDetail/${id}` }>
              adicionar ao carrinho
            </Link>
            <span>{ price }</span>

          </section>
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

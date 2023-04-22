import React from 'react';
import { Link } from 'react-router-dom';
import logoCarrinho from '../imagem/logoCarrinho.png';
import '../css/Header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>
          Trybe Shop
        </h1>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ logoCarrinho } alt="logoCarrinho" />
        </Link>
      </header>
    );
  }
}

export default Header;

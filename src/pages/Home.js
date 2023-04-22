import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import '../css/Home.css';
/* import { Link } from 'react-router-dom'; */
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Card from '../components/Card';
/* import logoCarrinho from '../imagem/logoCarrinho.png'; */

class Home extends Component {
  constructor() {
    super();
    this.state = {
      arrayCategoria: [],
      arrayProduct: [],
      product: '',
      categoria: '',
      fraseIncial: true,
    };
  }
  // const imagem = <img src="../imagem/logo_carrinho.png" alt="logo_carrinho" />

  componentDidMount = () => {
    this.getApiCategoria();
    this.getApiProducts();
  }

  getApiCategoria = async () => {
    const data = await getCategories();
    this.setState({ arrayCategoria: data });
  }

  getApiProducts = async () => {
    const { product, categoria } = this.state;
    const data = await getProductsFromCategoryAndQuery(categoria, product);
    this.setState({ arrayProduct: data.results });
  }

  handlerChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handlerClick = () => {
    this.setState({ fraseIncial: false }, () => {
      this.getApiProducts();
    });
  }

  handlerRadio = async (event) => {
    await this.handlerChange(event);
    this.handlerClick();
  }

  render() {
    const { arrayCategoria, fraseIncial, arrayProduct, product } = this.state;
    const { name } = this.props;
    const frase = (
      <span
        data-testid="home-initial-message"
        className="fraseSearch"
      >
        {name}
      </span>);
    return (
      <main className="main">
        <Header />
        <form>
          <div className="contanierSearch">
            <label htmlFor="input-search">
              <input
                id="input-search"
                className="input-search"
                type="text"
                onChange={ this.handlerChange }
                name="product"
                value={ product }
                data-testid="query-input"
              />
            </label>
            <label htmlFor="input-button">
              <input
                id="input-button"
                className="input-button"
                type="button"
                data-testid="query-button"
                onClick={ this.handlerClick }
                value="Search"
              />
            </label>
            {/* <Link to="/cart" data-testid="shopping-cart-button">
              <img src={ logoCarrinho } alt="logoCarrinho" />
            </Link> */}
          </div>
          { fraseIncial ? frase : !frase }
        </form>
        <section className="telaPrincipal">
          <aside>
            {arrayCategoria.map((item) => (
              <label
                htmlFor="input-radio"
                key={ item.id }
                data-testid="category"
              >
                <input
                  type="radio"
                  onClick={ this.handlerRadio }
                  value={ item.id }
                  name="categoria"
                />
                <span>{item.name}</span>
                <br />
                <br />
              </label>
            ))}
          </aside>
          <main className="resultadoPesquisa">
            <Card arrayProduct={ arrayProduct } />
          </main>
        </section>
      </main>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Home;

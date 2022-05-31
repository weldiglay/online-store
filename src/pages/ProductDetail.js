import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';
/* import { Link } from 'react-router-dom'; */
/* import logoCarrinho from '../imagem/logoCarrinho.png'; */
import { getProductsFromId } from '../services/api';
import { addItem } from '../services/itensCart';
import Feedback from '../components/Feedback';
import '../css/ProductDetail.css';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      productReturned: [],
      returnedAtributes: [],
      index: '',
      email: '',
      evaluation: '',
      feedback: JSON.parse(localStorage.getItem('savedEvaluations')) || [],
      // https://cursos.alura.com.br/forum/topico-spread-operator-em-objetos-advindos-do-json-parse-155113
    };
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  componentDidMount = async () => {
    const { match: { params: { id } } } = this.props;
    console.log(id);
    const product = await getProductsFromId(id);
    console.log(product);
    this.setState({
      productReturned: product,
      returnedAtributes: product.attributes,
    });
  }

  onClick = () => {
    const { email, index, evaluation } = this.state;
    const newEvaluation = {
      email,
      index,
      evaluation,
    };
    this.setState((previousState) => ({
      feedback: [...previousState.feedback, newEvaluation],
      email: '',
      index: '',
      evaluation: '',
    }), () => this.saveLocalStorage());
  }

  saveLocalStorage = () => {
    const { feedback } = this.state;
    localStorage.setItem('savedEvaluations', JSON.stringify(feedback));
  }

  addProductToCart(value) {
    addItem(value);
  }

  render() {
    const { productReturned, returnedAtributes, email,
      evaluation, feedback } = this.state;
    /* const { productReturned, returnedAtributes } = this.state;
    const { thumbnail, title, price, id } = productReturned;
    const { btnClick } = this.props; */

    return (
      <section>
        <Header />
        <div className="containerSuperior">
          <div className="detalhes">
            <h4>Especificações</h4>
            <div className="listaDeDetalhes">
              {
                returnedAtributes.map((atributes) => (
                  <p key={ atributes.id }>
                    {`${atributes.name}: ${atributes.value_name}`}
                    <br />
                  </p>
                ))
              }
            </div>
          </div>
          <div className="divProduto">
            <div>
              <img src={ productReturned.thumbnail } alt="imagem do produto" />
            </div>
            <div>
              <h4
                data-testid="product-detail-name"
                className="titulo"
              >
                {productReturned.title}
              </h4>
              <br />
              <h4 className="preco">{productReturned.price}</h4>
            </div>
          </div>
          <button
            type="button"
            className="btnCartDetail"
            data-testid="product-detail-add-to-cart"
            onClick={ () => { this.addProductToCart(productReturned); } }
          >
            Add To Cart
          </button>
        </div>
        {/* <div>
          <Link to="/cart" data-testid="shopping-cart-button">
            <img src={ logoCarrinho } alt="logoCarrinho" />
          </Link>
        </div> */}
        <div className="containerAvaliações">
          <h3>Avaliações</h3>
          <br />
          {
            feedback.map((elem) => (<Feedback
              key={ elem.index }
              feedback={ elem }
            />
            ))
          }
        </div>
        <form className="formularioAvaliação">
          <p><h5>Deixe sua Avaliação</h5></p>
          <br />
          <label htmlFor="email">
            digite seu email:
            <input
              data-testid="product-detail-email"
              id="email"
              type="text"
              name="email"
              value={ email }
              placeholder="e-mail"
              onChange={ this.onChange }
            />
          </label>
          Qual sua nota para esse produto?
          {/* { `${1}-rating`} */}
          <label htmlFor="rating">
            1
            <input
              type="radio"
              data-testid="1-rating"
              id="rating"
              value="1"
              name="index"
              onChange={ this.onChange }
            />
          </label>
          <label htmlFor="rating">
            2
            <input
              type="radio"
              data-testid="2-rating"
              id="rating"
              value="2"
              name="index"
              onChange={ this.onChange }
            />
          </label>
          <label htmlFor="rating">
            3
            <input
              type="radio"
              data-testid="3-rating"
              id="rating"
              value="3"
              name="index"
              onChange={ this.onChange }
            />
          </label>
          <label htmlFor="rating">
            4
            <input
              type="radio"
              data-testid="4-rating"
              id="rating"
              value="4"
              name="index"
              onChange={ this.onChange }
            />
          </label>
          <label htmlFor="rating">
            5
            <input
              type="radio"
              data-testid="5-rating"
              id="rating"
              value="5"
              name="index"
              onChange={ this.onChange }
            />
          </label>
          <br />
          <label htmlFor="evaluation">
            sua avaliação:
            <br />
            <textarea
              data-testid="product-detail-evaluation"
              id="evaluation"
              type="text"
              placeholder="avaliação"
              name="evaluation"
              value={ evaluation }
              onChange={ this.onChange }
            />
          </label>
          <br />
          <button
            type="button"
            id="btnAvaliacao"
            data-testid="submit-review-btn"
            onClick={ this.onClick }
          >
            Enviar
          </button>
        </form>
      </section>

    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({ params: PropTypes
    .shape({ id: PropTypes.string }) }).isRequired,

};

export default ProductDetail;

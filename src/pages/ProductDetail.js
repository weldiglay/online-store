import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import logoCarrinho from '../imagem/logoCarrinho.png';
import { getProductsFromId } from '../services/api';
import { addItem } from '../services/itensCart';
import Feedback from '../components/Feedback';

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
    const three = 3;
    const four = 4;
    const five = 5;

    /* const { productReturned, returnedAtributes } = this.state;
    const { thumbnail, title, price, id } = productReturned;
    const { btnClick } = this.props; */

    return (
      <section>
        <h4 data-testid="product-detail-name">{productReturned.title}</h4>
        <h4>{productReturned.price}</h4>
        <img src={ productReturned.thumbnail } alt="imagem do produto" />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => { this.addProductToCart(productReturned); } }
        >
          Add To Cart
        </button>
        <div>
          <Link to="/cart" data-testid="shopping-cart-button">
            <img src={ logoCarrinho } alt="logoCarrinho" />
          </Link>
        </div>
        <div>
          {
            returnedAtributes.map((atributes) => (
              <span key={ atributes.id }>
                {`${atributes.name}: ${atributes.value_name}`}
              </span>
            ))
          }
        </div>
        <form>
          <p><h5>Avaliações</h5></p>
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
          <label htmlFor="rating">
            1
            <input
              type="radio"
              data-testeid={ `${1}-rating`}
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
              data-testeid={ `${2}-rating` }
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
              data-testeid={ `${three}-rating` }
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
              data-testeid={ `${four}-rating` }
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
              data-testeid={ `${five}-rating` }
              id="rating"
              value="5"
              name="index"
              onChange={ this.onChange }
            />
          </label>
          <label htmlFor="evaluation">
            sua avaliação:
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
          <button
            type="button"
            data-testid="submit-review-btn"
            onClick={ this.onClick }
          >
            Enviar
          </button>
        </form>
        <div>
          <p>Avaliações Anteriores</p>
          {
            feedback.map((elem) => (<Feedback
              key={ elem.index }
              feedback={ elem }
            />

            ))
          }
        </div>
      </section>

    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({ params: PropTypes
    .shape({ id: PropTypes.string }) }).isRequired,

};

export default ProductDetail;

import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromId } from '../services/api';
import logoCarrinho from '../imagem/logoCarrinho.png';
import ProductAtributes from './ProductAtributes';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      productReturned: [],
      returnedAtributes: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.setState({}, async () => {
      const product = await getProductsFromId(id);
      this.setState({ productReturned: product, returnedAtributes: product.atributes });
      console.log('product', product);
    });
  }

  // <img src={ logoCarrinho } alt="logo-carrinho" />

  render() {
    const { productReturned, returnedAtributes } = this.state;
    const { thumbnail, title, price, id } = productReturned;
    const { btnClick } = this.props;

    return (
      <section>
        <h4 data-testid="product-detail-name">{title}</h4>
        <h4>{price}</h4>
        <img src={ thumbnail } alt="imagem do produto" />
        <button type="button" data-testid="product-detail-add-to-cart" value={ id }>
          adicionar carrinho
        </button>
        <div>
          <Link to="/cart" data-testid="shopping-cart-button">
            linkCart
          </Link>
        </div>
        {
          returnedAtributes.map((atributes) => (<ProductAtributes
            key={ atributes.id }
            details={ atributes }
          />))
        }
      </section>

    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }).isRequired,
  btnClick: PropTypes.func.isRequired,
};

export default ProductDetail;

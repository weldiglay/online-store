import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import logoCarrinho from '../imagem/logo_carrinho.png';
import { getProductsFromId } from '../services/api';
import { addItem } from '../services/itensCart';
/* import ProductAtributes from './ProductAtributes'; */

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      productReturned: [],
      returnedAtributes: [],
    };
  }

  componentDidMount = async () => {
    const { match: { params: { id } } } = this.props;
    console.log(id);
    const product = await getProductsFromId(id);
    console.log(product);
    this.setState({
      productReturned: product,
      returnedAtributes: product.attributes,
    });
    /* this.setState({}, async () => {
      this.setState({ productReturned: product,
        returnedAtributes: product.atributes });
      console.log('product', product);
    }); */
  }
  // retirado imagem do carrinho
  // <img src={ logoCarrinho } alt="logo-carrinho" />

  addProductToCart(value) {
    addItem(value);
  }

  render() {
    const { productReturned, returnedAtributes } = this.state;
    /* const { attributes } = productReturned;
    console.log(attributes); */
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
      </section>

    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({ params: PropTypes
    .shape({ id: PropTypes.string }) }).isRequired,
};

export default ProductDetail;

import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromId } from '../services/api';
import logoCarrinho from '../imagem/logoCarrinho.png';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},

    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.setState({}, async () => {
      const product = await getProductsFromId(id);
      this.setState({ product });
      console.log('product', product);
    });
  }
  // retirado imagem do carrinho
  // <img src={ logoCarrinho } alt="logo-carrinho" />

  render() {
    const { product } = this.state;
    const { thumbnail, title, price } = product;
    //   const { btnClick } = this.props; vai precisar posteriormente

    return (
      <section>
        <div>
          <h4 data-testid="product-detail-name">{title}</h4>
          <img src={ thumbnail } alt={ `nome do produto: ${title}` } />
          <p>{price}</p>
          {/* <div>
          <Link to="/cart" data-testid="shopping-cart-button">
            linkCart
          </Link>
        </div> */}
        </div>
      </section>

    );
  }
}

// ProductDetail.propTypes = {
//   match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) })
//     .isRequired,
//   btnClick: PropTypes.func.isRequired,
// };

ProductDetail.propTypes = {
  match: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  params: PropTypes.string,
  id: PropTypes.string,
};

ProductDetail.defaultProps = {
  match: '',
  params: '',
  id: '',
};
export default ProductDetail;

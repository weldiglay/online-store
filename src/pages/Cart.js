import React, { Component } from 'react';
import Header from '../components/Header';
// import { getItensCart } from '../services/itensCart';
import { productsIDSaved } from '../services/productsLocalStorage';
import '../css/Cart.css';

class Cart extends Component {
  constructor() {
    super();
    this.state = {

      savedProductsLS: productsIDSaved() || [],
      cart: [],

    };
  }

  componentDidMount= async () => {
    try {
      const { savedProductsLS } = this.state;
      console.log(savedProductsLS);

      this.setState({ cart: savedProductsLS });
    } catch (error) {
      Error(`mensagem de erro' + ${error}`);
    }
  }

  increaseButton = (prodID) => {
    const { cart } = this.state;
    // const foundProduct = cart.find((item) => item.id === prodID);
    // const indexOfProduct = cart.indexOf((item) => item.id === "MLB1720091805");
    const indexOfProduct = cart.map((e) => e.id).indexOf(prodID);
    console.log('ID', indexOfProduct);
    const counter = cart[indexOfProduct].count + 1;
    cart[indexOfProduct].count = counter;
    console.log('ID', cart[indexOfProduct].count);
    this.setState({
      cart,
    });
  }

  decreaseButton = (prodID) => {
    const { cart } = this.state;
    // const foundProduct = cart.find((item) => item.id === prodID);
    const indexOfProduct = cart.map((e) => e.id).indexOf(prodID);
    const counter = cart[indexOfProduct].count - 1;
    if (counter >= 0) {
      cart[indexOfProduct].count = counter;
      this.setState({
        cart,
      });
    }
  }

  render() {
    const { cart } = this.state;
    console.log('cart', cart);
    return (
      <div className="contanierCart">
        <Header />
        <div
          className="cart-container"
          data-testid="shopping-cart-empty-message"
        >
          <div className="produtcsList">
            {cart.length > 0 ? (
              cart.map((productInfo) => (
                <div key={ productInfo.id } className="productCart">
                  <img src={ productInfo.thumbnail } alt="imagem do produto" />
                  <p data-testid="shopping-cart-product-name">
                    { productInfo.title }
                  </p>
                  <p>
                    R$
                    {' '}
                    { (productInfo.count * productInfo.price).toFixed(2) }
                  </p>
                  <div className="btnQuantidade">
                    <button
                      name={ productInfo.id }
                      data-testid="product-decrease-quantity"
                      type="button"
                      onClick={ () => this.decreaseButton(productInfo.id) }
                    >
                      -
                    </button>
                    <span data-testid="shopping-cart-product-quantity">
                      {productInfo.count}
                    </span>
                    <button
                      name={ productInfo.id }
                      data-testid="product-increase-quantity"
                      type="button"
                      onClick={ () => this.increaseButton(productInfo.id) }
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>
                Seu carrinho está vazio
              </p>
            )}
          </div>
          <button
            type="button"
            data-testid="checkout-products"
            className="btnCheckout"
          >
            Checkout
          </button>
        </div>
      </div>
    );
  }
}

export default Cart;

import React, { Component } from 'react';
import { getItensCart } from '../services/itensCart';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  componentDidMount= async () => {
    const backup = await getItensCart();
    this.setState({
      cart: backup,
    });
  }

  render() {
    const { cart } = this.state;
    return (
      <section>
        {/* alteração div para section */}
        { cart.length === 0
          ? (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)
          : (
            <section>
              {cart.map((p) => (
                <div data-testid="shopping-cart-product-name" key={ p.id }>
                  <img src={ p.thumbnail } alt={ p.title } />
                  <p>{ p.title }</p>
                  <span>{ p.price }</span>
                  <div>
                    <span data-testid="shopping-cart-product-quantity">
                      { cart.filter((qtd) => qtd.id === p.id).length }
                    </span>
                  </div>
                </div>
              ))}
            </section>)}
      </section>
    );
  }
}

export default Cart;

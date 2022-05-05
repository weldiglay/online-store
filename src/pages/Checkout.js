import React from 'react';
import PropTypes from 'prop-types';

class Checkout extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: '',
  //     CPF: '',
  //     CEP: '',
  //     email: '',
  //     tel: '',
  //     endereco: '',
  //   };
  // }

  totalPrice = () => {
    const { produtos } = this.props;
    let total = 0;
    produtos.forEach((produto) => {
      total += produto.price * produto.quantidade;
    });
    return total;
  };

  // formHandler = ({ target }) => {
  //   const { name } = target;
  //   // const value = target.type === 'radio' ? target.checked : target.value;

  //   // this.setState = {
  //   //   [name]: value,
  //   // };
  // };

  render() {
    const { produtos } = this.props;
    // const { name, CPF, CEP, email, tel, endereco } = this.state;

    return (
      <section>
        <div>
          <h2>Revise seus produtos</h2>
        </div>
        <div>
          {/* {produtos.map((produto) => (
            <CartProduct key={ produto.id } produto={ produto } />
          ))} */}
        </div>
        <p>{`Total: R$ ${this.totalPrice()}`}</p>

        <form>
          <label htmlFor="user-name">
            <input
              id="user-name"
              // value={ name }
              data-testid="checkout-fullname"
              type="text"
              // onChange={ this.formHandler }
              name="name"
              placeholder="Nome completo"
            />
          </label>
          <label htmlFor="emailId">
            <input
              id="emailId"
              // value={ email }
              data-testid="checkout-email"
              type="text"
              // onChange={ this.formHandler }
              name="email"
              placeholder="Email"
            />
          </label>
          <label htmlFor="CPF-id">
            <input
              id="CPF-id"
              // value={ CPF }
              data-testid="checkout-cpf"
              type="text"
              // onChange={ this.formHandler }
              name="CPF"
              placeholder="CPF"
            />
          </label>
          <label htmlFor="tel-id">
            <input
              id="tel-id"
              // value={ tel }
              data-testid="checkout-phone"
              type="text"
              // onChange={ this.formHandler }
              name="tel"
              placeholder="Telefone"
            />
          </label>
          <label htmlFor="CEP-id">
            <input
              id="CEP-id"
              // value={ CEP }
              data-testid="checkout-cep"
              type="text"
              // onChange={ this.formHandler }
              name="CEP"
              placeholder="CEP"
            />
          </label>
          <label htmlFor="endereco-id">
            <input
              id="endereco-id"
              // value={ endereco }
              data-testid="checkout-address"
              type="text"
              // onChange={ this.formHandler }
              name="endereco"
              placeholder="Endereço"
            />
          </label>
        </form>
      </section>
    );
  }
}

Checkout.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Checkout;

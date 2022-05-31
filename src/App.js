import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import Cart from './pages/Cart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={ () => (
            <Home name="Digite algum termo de pesquisa ou escolha uma categoria." />

          ) }
        />
        <Route exact path="/cart" component={ Cart } />
        <Route exact path="/ProductDetail/:id" component={ ProductDetail } />
        {/* <Route
          path="/checkout"
          render={ (props) => (<Checkout
            { ...props }
            arrayproduct={ arrayproduct }
          />) }
        /> */}
      </BrowserRouter>
    );
  }
}

export default App;

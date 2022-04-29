import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';

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
        <Route path="/cart" component={ Cart } />
        <Route path="/ProductDetail/:id" component={ ProductDetail } />

      </BrowserRouter>
    );
  }
}

export default App;

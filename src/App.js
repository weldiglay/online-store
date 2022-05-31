import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import Cart from './pages/Cart';

class App extends React.Component {
  render() {
    return (
      <section>
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
      </section>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import Cart from './pages/Cart';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => (
                <Home name="Digite algum termo de pesquisa ou escolha uma categoria." />
              ) }
            />
            <Route path="/ProductDetail/:id" component={ ProductDetail } />
            <Route path="/cart" component={ Cart } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

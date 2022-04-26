import React from 'react';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <section>
        <form>
          <input
            type="text"
          />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </form>
      </section>
    );
  }


export default App;

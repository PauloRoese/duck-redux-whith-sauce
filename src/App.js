import React from 'react';
import ListaItems from './components/listaItems';
import { Provider } from 'react-redux';
import store from './store'
import Counter from './components/counter';

function App() {
  return (
    <div >
      <Provider store={store}>
        <ListaItems />
        <Counter />
      </Provider>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { ProductContainer } from '../containers/ProductsListContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

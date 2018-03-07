import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { ProductsListContainer } from './containers/ProductsListContainer';

ReactDOM.render(<ProductsListContainer />, document.getElementById('root'));
registerServiceWorker();

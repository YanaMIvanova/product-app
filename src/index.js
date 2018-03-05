import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {ProductContainer} from './containers/ProductsListContainer';

ReactDOM.render(<ProductContainer />, document.getElementById('root'));
registerServiceWorker();

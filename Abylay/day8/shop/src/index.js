import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import createStore from './store/store';
import {getProducts, getProductsCount} from './reducer';
import {Provider,connect} from 'react-redux';
import { addProduct } from './actions/productsActions';
import { getRecords } from './reducer';
import createStore from './store/store';
import Company from './components/company/company';
import Client from './components/client/client';
import Customer from './components/customer/customer';

const store = createStore();


const mapStatetoProps = state => ({
	records : getProducts(state)
});

const mapDispatchtoProps = {
	addProduct
};

const AppWithRedux = connect(
	mapStatetoProps,
	mapDispatchtoProps
)(Company);



registerServiceWorker();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

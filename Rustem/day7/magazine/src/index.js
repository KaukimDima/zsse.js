import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider, connect } from 'react-redux';
import { buyTea, buyMilk,buyBread } from './actions/listActions';
import { getProducts } from './reducers';
import createStore from './store';

const store = createStore();


const mapStatetoProps = state => ({
	products : getProducts(state)
});

const mapDispatchtoProps = {
    buyTea, 
    buyMilk,
    buyBread
};

const AppWithRedux = connect(
	mapStatetoProps,
	mapDispatchtoProps
)(App);

ReactDOM.render(
	<Provider store={ store }> 
		<AppWithRedux /> 
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();

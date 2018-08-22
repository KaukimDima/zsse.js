import React, {Component, PureComponent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createStore from './store';
import App from './App';
import {Provider, connect} from 'react-redux';
import Customer from './components/customer';
import Client from './components/client';
import Company from './components/company';
import {select, submit} from './actions';
import {getProducts, getBudget} from './reducers';



const store = createStore();



const mapStateToProps = (state) => ({
    products : getProducts(state),
    budget : getBudget(state)
})

const mapDispatchsToProps = {
    select,
    submit
}




export const CompanyWithRedux = connect(
    mapStateToProps,
    mapDispatchsToProps
)(Company)

export const AppWithRedux = connect(
    mapStateToProps,
    mapDispatchsToProps
)(App)

export const ClientWithRedux = connect(
    mapStateToProps,
    mapDispatchsToProps
)(Client)

export const CustomerWithRedux = connect(
    mapStateToProps,
    mapDispatchsToProps
)(Customer)


ReactDOM.render(
    <Provider store={store}>
      <AppWithRedux />
    </Provider>,
    document.getElementById('root')
  );
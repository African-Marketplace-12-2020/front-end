import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
//import { fetchData } from './actions/marketActions';
import Login from './components/forms/Login';
import Signup from './components/forms/Signup';
import ProductList from './components/ProductList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App(props) {

  /*
  useEffect(() => {
    props.fetchData();
  }, [])
  */

  return (
    <div className="App">
        <h1>African Marketplace</h1>
        <Router>
          <Switch>
            <PrivateRoute exact path="/product-list" component={ProductList} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    marketAsProps: state.data,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, {/*fetchData */})(App);

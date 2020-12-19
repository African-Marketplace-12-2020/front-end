import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
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

 const logout = () => {
  //localStorage.removeItem('token');
  }

  return (
    <div className="App">
        <h1>African Marketplace</h1>
        <Router>
          <ul>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/logout" onClick={logout}>Logout</NavLink></li>
            <li><NavLink to="/product-list">Product List</NavLink></li>
          </ul>
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

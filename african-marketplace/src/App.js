import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/forms/Login';
import Signup from './components/forms/Signup';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App(props) {

  return (
    <div className="App">
        <h1 className="AppTitle">African Marketplace</h1>
        <Router>
          <Navbar {...props} />
          <Switch>
            <PrivateRoute exact path="/product-list" component={ProductList} />
            <Route path="/login" component={props => <Login {...props} />} />
            <Route path="/signup" component={props => <Signup {...props} />} />
          </Switch>
        </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userId: state.data,
    isLoggedIn: state.isFetching,
    error: state.error,
    token: state.data
  }
}

export default connect(mapStateToProps, {})(App);

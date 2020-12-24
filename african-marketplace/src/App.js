import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	NavLink,
} from 'react-router-dom';
import { connect } from 'react-redux';
//import { fetchData } from './actions/marketActions';
import Login from './components/forms/Login';
import Signup from './components/forms/Signup';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import PrivateRoute from './components/PrivateRoute';
import Market from './components/Market';
import NavBar from './components/Navbar';
import './App.css';

function App(props) {
	/*
  useEffect(() => {
    props.fetchData();
  }, [])
  */

	return (
		<div className='App'>
			<h1 className='AppTitle'>African Marketplace</h1>
			<Router>
				<Navbar {...props} />
				<Switch>
					<PrivateRoute exact path='/product-list' component={ProductList} />
					<Route path='/login' component={(props) => <Login {...props} />} />
					<Route path='/signup' component={(props) => <Signup {...props} />} />
					<Route path='/market' component={(props) => <Market {...props} />} />
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
		token: state.data,
	};
};

export default connect(mapStateToProps, {
	/*fetchData */
})(App);

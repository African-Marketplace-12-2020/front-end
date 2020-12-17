
import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import { connect } from 'react-redux';
//import { fetchData } from './actions/marketActions';
import logo from './logo.svg';
import './App.css';

function App(props) {

  /*
  useEffect(() => {
    props.fetchData();
  }, [])
  */

  return (
    <div className="App">
      <BrowserRouter>
      <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
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

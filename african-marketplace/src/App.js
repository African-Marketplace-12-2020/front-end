import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
//import { fetchData } from './actions/marketActions';
import './App.css';

function App(props) {

  /*
  useEffect(() => {
    props.fetchData();
  }, [])
  */

  return (
    <div className="App">
        <Router>
          <Switch>
            <PrivateRoute exact path="/protected" component={FriendsList} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
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

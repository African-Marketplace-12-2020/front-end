import React, { useEffect } from 'react';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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

export default connect(mapStateToProps, {})(App);

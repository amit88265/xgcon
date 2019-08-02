import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllSideTabs } from './store/actions/sideTabActions';
import './App.css';
import Dashboard from './container/Dashboard';

class App extends Component {

  constructor(props) {
    super(props);
    this.props.getAllTabs();
  }

  render() {
    return (
      <Dashboard drawerTabs={this.props.sideDrawer}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sideDrawer: state.sideTab.tabs,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTabs: () => dispatch(getAllSideTabs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import Layout from './hoc/Layout/Layout';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import Auth from './container/Auth/Auth';
import Dashboard from './hoc/Dashboard/Dashboard';

class App extends React.Component {
  render() {
    return (
          <Layout {...this.props}>            
            <Switch>
              <Route path="/auth" component={Auth}/>
              <Route path="/" component={Dashboard} />
              <Redirect to="/" />
            </Switch>
          </Layout>
    );
  }
}

export default withRouter(App);
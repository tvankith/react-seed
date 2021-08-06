/* eslint-disable max-len */
import React, { Suspense, lazy } from 'react';
import {
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';

import { setTopLevelNavigation } from './navigator';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const AuthLayout = lazy(() => import('../pages/layout/AuthLayout'));
const Layout = lazy(() => import('../pages/layout/Layout'));


export default function Routes() {


  return (
    <Router ref={setTopLevelNavigation}>
      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          <PublicRoute path="/" component={AuthLayout} exact />
          <PublicRoute path="/register" component={AuthLayout} exact />
          


          <PrivateRoute path="/dashboard" component={Layout} exact />
          
        </Switch>
      </Suspense>
    </Router>
  );
}

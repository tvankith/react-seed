/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React, { lazy, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
// import Sidenav from './Sidenav';
// import Topnav from './Topnav';

// import { FooterLogo } from '../../assets/images';

const Error404 = lazy(() => import("../Error/Error404"));
const Register = lazy(() => import("../Auth/Register/Register"));
const Login = lazy(() => import("../Auth/Login/Login"));

const AuthLayout = () => {
  const history = useHistory();
  const { location } = history;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section className="">
      <div className="">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/*">
            <Error404 />
          </Route>
        </Switch>
        <div
          className="flex justify-center text-base my-4"
          style={{ color: "#D1E6F0" }}
        >
          © Copyright React - All Rights Reserved.
        </div>
      </div>
    </section>
  );
};
export default AuthLayout;

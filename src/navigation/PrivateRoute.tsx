import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { checkIsAuthenticating } from '../../store/authentication/selector';
import { storageEngine } from '../common/helper';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  // check whether the props contain redirect(ie 'to' exist or not)
  // eslint-disable-next-line max-len
  const checkIfRedirectPresent = (props: any, restParam: any) => (restParam.to ? { ...props, to: restParam.to } : props);

  // check if is authenticationg
  const isAuthenticating = true;

  // checking token present in local storage
  const checkIfTokenExist = () => {
    const access_token = storageEngine.get('access_token');
    if (!access_token) return false;
    return true;
  };
  return (
    <Route
      {...rest}
      render={(props) => (checkIfTokenExist() ? (
        isAuthenticating ? (
          <Component {...checkIfRedirectPresent(props, rest)} />
        ) : (
          <Component {...checkIfRedirectPresent(props, rest)} />
        )
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      ))}
    />
  );
};

export default PrivateRoute;
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { storageEngine } from '../common/helper';

const PublicRoute = ({ component: Component, ...rest }: any) => {
  // check whether the props contain redirect(ie 'to' exist or not)
  // eslint-disable-next-line max-len
  const checkIfRedirectPresent = (props: any, restParam: any) => (restParam.to ? { ...props, to: restParam.to } : props);

  // checking token present in local storage
  const checkIfTokenExist = () => {
    const access_token = storageEngine.get('access_token');
    if (!access_token) return false;
    return true;
  };
  return (
    <Route
      {...rest}
      render={(props) => (!checkIfTokenExist() ? (
        <Component {...checkIfRedirectPresent(props, rest)} />
      ) : (
        <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />
      ))}
    />
  );
};

export default PublicRoute;
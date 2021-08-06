/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Axios from 'axios';
import { APP_ENTRYPOINT } from '../../../config/config';
import { CreateUser, LoginUser } from '../../../interface/users';


function userSignUp(value: CreateUser) {
  return Axios.put(`${APP_ENTRYPOINT}auth/userSignup`,
    value);
}

const login = async (value: LoginUser) => {
  return Axios.post(`${APP_ENTRYPOINT}auth/login`,
    value);
}



const withoutAuth = {
  userSignUp, login,
};

export default withoutAuth;

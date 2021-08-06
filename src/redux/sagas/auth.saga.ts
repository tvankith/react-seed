import { takeEvery, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { navigator } from "../../navigation/navigator";
import loaderSlice from "../slices/loader.slice";
import authSlice from "../slices/auth.slice";
import { storageEngine } from "../../common/helper";
import Api from "../../services/Apis/index";
import { LOGIN, LOGOUT, USER_SIGN_UP } from "../actions/auth.actions";
import { setToken } from "../../services/Apis/user/user";
import { ResponseGenerator } from "../../interface/Response";
import { LoginUser, CreateUser } from "../../interface/users";

function* login(action: PayloadAction<LoginUser>) {
  try {
    yield put(loaderSlice.actions.show());
    const response: ResponseGenerator = yield Api.withoutAuth.login(
      action.payload
    );
    yield put(authSlice.actions.setUserData(response.data.data));
    const { access_token, refresh_token } = response.data;
    storageEngine.set("user", response.data.data);
    setToken(access_token, refresh_token);
    const user = response.data.data;
    const role = user.roles.role;
    console.log(user);

    navigator.history.replace("/dashboard");
    toast.success("Successfully login");

    yield put(loaderSlice.actions.hide());
  } catch (err) {
    yield put(authSlice.actions.setAuthentication(false));
    yield put(loaderSlice.actions.hide());
    toast.error(err?.response?.data?.message);
  }
}

function* logout() {
  try {
    yield put(loaderSlice.actions.show());
    yield Api.user.logout();
    storageEngine.unset("user");
    storageEngine.unset("access_token");
    storageEngine.unset("refresh_token");
    navigator.history.replace("/");
    yield put(loaderSlice.actions.hide());
    toast.warn("Successfully logged out");
  } catch (err) {
    yield put(loaderSlice.actions.hide());
    console.log(err);
    // toast.error(err.data.message);
  }
}
function* userSignUp(action: PayloadAction<CreateUser>) {
  try {
    yield put(loaderSlice.actions.show());
    yield Api.withoutAuth.userSignUp(action.payload);
    navigator.history.replace("/thanksforsignup");
    yield put(loaderSlice.actions.hide());
  } catch (e) {
    console.log(e.response.data.message);
    toast.error(e.response.data.message);
  }
}

function* authSaga() {
  yield takeEvery(USER_SIGN_UP, userSignUp);
  yield takeEvery(LOGIN, login);
  yield takeEvery(LOGOUT, logout);
}

export default authSaga;

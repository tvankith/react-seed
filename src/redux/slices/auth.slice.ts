/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateUser } from "../../interface/users";

type InitialState = {
  authenticated: boolean;
  initialAuthentcationRequest: boolean;
  user:
    | {
        id: string;
        firstName: string;
        lastName: string;
        role: string;
        email: string;
      }
    | any;
  topBatTitle: string;
};

const initialState: InitialState = {
  user: undefined,
  authenticated: false,
  initialAuthentcationRequest: false,

  topBatTitle: "DASHBOARD OVERVIEW",
};

export const checkauth = (state: InitialState) => state;

// eslint-disable-next-line no-unused-vars
export const login = (
  state: InitialState,
  action: PayloadAction<{ password: string; email: string }>
) => state;

export const logout = (state: InitialState) => state;

export const setAuthenticatedUser = (
  state: InitialState,
  action: PayloadAction<any>
) => {
  state.user = action.payload;
  state.authenticated = true;
  state.initialAuthentcationRequest = true;
};

export const setAuthentication = (
  state: InitialState,
  action: PayloadAction<boolean>
) => {
  state.authenticated = action.payload;
  state.initialAuthentcationRequest = true;
};

export const clearAuthentication = (
  state: InitialState,
  action: PayloadAction<void>
) => {
  state.authenticated = false;
  state.initialAuthentcationRequest = true;
  state.user = undefined;
};

const userSignUp = (state: any, action: PayloadAction<CreateUser>) => state;
export const setUserData = (
  state: InitialState,
  action: PayloadAction<any>
) => {
  state.user = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login,
    logout,
    setAuthenticatedUser,
    checkauth,
    setAuthentication,
    clearAuthentication,
    userSignUp,
    setUserData,
  },
});
export default authSlice;

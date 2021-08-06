/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef } from "react";
import "../styles.scss";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import authSlice from "../../../redux/slices/auth.slice";
import { loginFormSchema } from "../../../utils/validation/schemas";
import PasswordInput from "../../../components/FormikFields/PasswordInput/PasswordInput";
import InputBox from "../../../components/FormikFields/InputBox/InputBox";
import Button from "../../../components/FormikFields/Button/Button";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const formikRef: any = useRef();
  const dispatch = useDispatch();
  const onSubmit = (values: typeof initialValues) => {
    dispatch(
      authSlice.actions.login({
        password: values.password,
        email: values.email,
      })
    );
  };
  return (
    <Formik
      innerRef={formikRef}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={loginFormSchema}
    >
      {({ handleSubmit, values, isValid }) => (
        <>
          <div className="">
            <main className="">
              <div className="rounded-lg md:rounded-xl bg-white flex flex-col">
                <div className="px-8">

                  <div className="flex mt-16 md:mt-18  w-full">
                    <InputBox name="email" label="Email" placeholder="" />
                  </div>
                  <div className="mt-8 md:mt-14">
                    <PasswordInput
                      name="password"
                      label="Password*"
                      placeholder=""
                      type="password"
                      onKeyDown={(e: any) => {
                        if (e.key === "Enter") {
                          handleSubmit();
                        }
                      }}
                    />
                  </div>
                  <div className="flex justify-center ">
                    <div className="mt-8 w-2/3 md:w-5/12 md:mt-14">
                      <Button
                        onClick={handleSubmit}
                        text="Log In"
                        active={isValid}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </>
      )}
    </Formik>
  );
};

export default Login;

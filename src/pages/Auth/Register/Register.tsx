import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import authSlice from "../../../redux/slices/auth.slice";
import { CreateClientAdminSchema } from "../../../utils/validation/schemas";
import PasswordInput from "../../../components/FormikFields/PasswordInput/PasswordInput";
import { logoTab } from "../../../assets/images";
import Button from "../../../components/FormikFields/Button/Button";
import { NavLink } from "react-router-dom";
import InputBoxMobile from "../../../components/FormikFields/InputBoxMobile/InputBoxMobile";

const Register = (props) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const formikRef = useRef<any>(null);

  const registerBuilder = (values: any) => {

  };

  return (
    <Formik
      innerRef={formikRef}
      initialValues={initialValues}
      onSubmit={registerBuilder}
      validationSchema={() => CreateClientAdminSchema}
    >
      {({ handleSubmit, values, isValid }) => (
        <div className="bg-primary container w-11/12 md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-full">
          <main className="">
            <div className="rounded-2xl bg-white flex flex-col">
              <div className="w-full px-3 md:px-5">
                <div className="flex flex-col">
                  <div className="flex justify-center mt-8 md:mt-5">
                    <img src={logoTab} alt="" />
                  </div>
                  <div className="flex flex-col text-center text-lg md:mt-3 leading-6	font-medium">
                    <span className="text-bg-primary font-medium text-base md:text-lg md:leading-6 leading-5 tracking-tight">
                      Create
                    </span>
                    <span className="mt-2 font-medium text-xl md:text-2xl leading-8 table-text-color">
                      Your Account
                    </span>
                  </div>
                </div>
                <div className="grid md:grid-cols-1">
                  <div className="mt-4 md:mt-10">
                    <InputBoxMobile
                      name="firstName"
                      label="First Name"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-8 md:mt-12">
                    <InputBoxMobile
                      name="lastName"
                      label="Last Name"
                      placeholder=""
                    />
                  </div>

                  <div className="mt-8 md:mt-12">
                    <InputBoxMobile name="email" label="Email" placeholder="" />
                  </div>
                  <div className="mt-8 md:mt-12">
                    <PasswordInput
                      name="password"
                      label="Password"
                      placeholder=""
                      type="password"
                    />
                  </div>
                </div>
                <div className="flex justify-center ">
                  <div className="w-2/3 mt-6 md:mt-8 md:w-1/2">
                    <Button
                      onClick={handleSubmit}
                      text="Next"
                      active={isValid}
                    />
                  </div>
                </div>
              </div>
              <div className=" flex flex-row justify-center mb-6 md:mt-6">
                <span className="text-secondary text-basr font-md">
                  Already have an account ?&nbsp;
                </span>
                <NavLink to="/">
                  <span className="card-color-primary">{` `}Login here</span>
                </NavLink>
              </div>
            </div>
          </main>
        </div>
      )}
    </Formik>
  );
};

export default Register;

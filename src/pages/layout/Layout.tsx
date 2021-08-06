/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React, { lazy, useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import { storageEngine } from "../../common/helper";
import { useSelector } from "react-redux";

import MobileTopNav from "./mobileTopNav/MobileTopNav";
import Heading from "./Heading";

const Dashboard = lazy(() => import("../Dashboard/Dashboard"));
const Error404 = lazy(() => import("../Error/Error404"));

const Layout = (props) => {
  const [showSide, setShowSide] = useState(false);
  const history = useHistory();
  const { location } = history;

  const user = storageEngine.get("user");
  const role = user && user.roles.role


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    console.log("showSide", showSide);
  }, [showSide]);

  const title = useSelector((state) => state.auth.topBatTitle);


  return (
    <section className="main-container flex w-full flex-col overflow-y-scroll">
      <div className="flex md:hidden h-20">
        <MobileTopNav onPressHamBurger={() => setShowSide(!showSide)} />
      </div>
      <Topnav />
      <div className="w-100" style={{ height: 1, backgroundColor: "#EBEBEB" }} />
      <div className="w-full flex mt-2">
        <Sidenav showSide={showSide} />


        <div className="right-col w-5/6 flex flex-col overflow-y-auto px-8">

          <div className="w-full flex flex-col">
            <div className="py-6">
              <Heading title={title} />

            </div>
            <Switch>
              <Route exact path="/dashboard">

                <Dashboard />


              </Route>




              <Route exact path="*">
                <Error404 />
              </Route>
            </Switch>

          </div>
        </div>

      </div>
      <div className="w-100" style={{ height: 1, backgroundColor: "#EBEBEB" }} />
      <footer className="w-full  py-3 px-24 justify-between flex items-center mb-1 text-gray-700">
        <div className="w-1/2">
          © 2021 React  | Neoito Pvt Ltd.
      </div>
        <div className="w-1/2 justify-end flex">
          <span className="mx-2">Help center</span>
          <span className="mx-2">•</span>
          <span className="mx-2">Terms of use</span>
          <span className="mx-2">•</span>
          <span className="mx-2">Proivacy policy</span>
        </div>
      </footer>
    </section>
  );
};
export default Layout;

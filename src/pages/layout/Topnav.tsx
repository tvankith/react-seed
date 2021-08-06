import React from 'react';
import "./styles.scss";
import {Logo,ProfilePic} from '../../assets/images';

const Topnav = ( ) => {

  return (
    <>
      <header className="topbar-profile w-full flex items-center py-2 pl-6 pr-6 sm:flex">
      <img src={Logo} alt="logo" />
        <div className="w-full flex justify-between items-center align-center invisible md:visible">
          <div>
            <span className="text-base text-primary font-semibold capitalize">Admin Dashboard</span>

          </div>
          <div className="flex items-center">
            <div className="mr-4 text-primary">
            Manage Account
            </div>
            <div className="">
              <img src={ProfilePic} alt="" />
            </div>
            
           

          </div>
        </div>
      </header>
    </>
  );
}
export default Topnav;

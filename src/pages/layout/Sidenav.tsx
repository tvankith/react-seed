/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { NavLink } from "react-router-dom";
import { storageEngine } from "../../common/helper";
import { SideBarIcon } from '../../assets/images';
import "./styles.scss";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const Sidenav = ({ showSide }) => {

  //State
  const user = storageEngine.get("user");
  const role = user && user.roles.role

  //Functions


  return (
    <aside className={`fixed md:static side-nav h-full w-1/6 md:block ${showSide ? 'block' : 'hidden'}`}>

      {/* <div className="sidebar-profile flex flex-row justify-center w-full py-50, px-10"> */}
      {/* <img className="h-30 w-14 pt-3 mr-5 w-1/5 cursor-pointer" src={menuCollapse} />  */}

      {/* </div> */}
      {/* <div className="flex flex-wrap justify-between menu-items mt-5"> */}

      <>
        {/* <NavLink
              to="/dashboard"
              activeClassName="activeClass"
              className="menu-card justify-center items-center overflow-hidden mx-auto w-full"
            >
              <div className="flex flex-row w-full items-center ">
               <img src={SideBarIcon} alt="icon"/>
                <h1 className="flex ml-3 text-base text-white">Dashboard</h1>
              </div>
            </NavLink> */}
        <ProSidebar className="w-full min-w-0" style={{ width: "100%", minWidth: 0 }}>
          <Menu iconShape="square">
            <SubMenu
              prefix={<MyIcon />}
              // title={{ id: 'withPrefix' }}
              title="Dashboard"
              className="side-nav-sub-menu-item py-6 sidenav-border"
            >
              <MenuItem className="side-nav-menu-item">
                <NavLink to="/dashboard">
                  Overview
              </NavLink>
              </MenuItem>
            </SubMenu>
            <SubMenu
              prefix={<MyIcon />}
              title="Sales"
              className="side-nav-sub-menu-item py-6 sidenav-border"
            >
              <MenuItem className="side-nav-menu-item">Sales Overview</MenuItem>
              <MenuItem className="side-nav-menu-item">All Product Orders</MenuItem>
              <MenuItem className="side-nav-menu-item">Packages Orders</MenuItem>
            </SubMenu>
            <SubMenu
              prefix={<MyIcon />}
              title="Users"
              className="side-nav-sub-menu-item py-6 sidenav-border"
            >
              <MenuItem className="side-nav-menu-item">All Users</MenuItem>
              <MenuItem className="side-nav-menu-item">Add User</MenuItem>
              <MenuItem className="side-nav-menu-item">Tickets & Disputese</MenuItem>
            </SubMenu>
            <SubMenu
              prefix={<MyIcon />}
              title="Products | 22"
              className="side-nav-sub-menu-item py-6 sidenav-border"
            >
              <MenuItem className="side-nav-menu-item">Pending Approval (22)</MenuItem>
              <MenuItem className="side-nav-menu-item">All Products</MenuItem>
              <MenuItem className="side-nav-menu-item">Add New Product</MenuItem>
              <MenuItem className="side-nav-menu-item">All Saved Drafts</MenuItem>
            </SubMenu>
            <SubMenu
              prefix={<MyIcon />}
              title="Types & Categories"
              className="side-nav-sub-menu-item py-6 sidenav-border"
            >
              <MenuItem className="side-nav-menu-item">Categories</MenuItem>
              <MenuItem className="side-nav-menu-item">Product Types</MenuItem>
              <MenuItem className="side-nav-menu-item">License Types</MenuItem>
            </SubMenu>
            <SubMenu
              prefix={<MyIcon />}
              title="Contributors | 8"
              className="side-nav-sub-menu-item py-6 sidenav-border"
            >
              <MenuItem className="side-nav-menu-item">New Contributor Requests (8)</MenuItem>
              <MenuItem className="side-nav-menu-item">All Contributors</MenuItem>
              <MenuItem className="side-nav-menu-item">Outstanding Payouts</MenuItem>
              <MenuItem className="side-nav-menu-item">Contributor Types</MenuItem>
            </SubMenu>
            <SubMenu
              prefix={<MyIcon />}
              title="Collections"
              className="side-nav-sub-menu-item py-6 sidenav-border"
            >
              <MenuItem className="side-nav-menu-item">All Collections</MenuItem>
              <MenuItem className="side-nav-menu-item">Add New Collection</MenuItem>
              <MenuItem className="side-nav-menu-item">Collection Categories</MenuItem>
              <MenuItem className="side-nav-menu-item">Collection Tags</MenuItem>
            </SubMenu>

            <SubMenu
              prefix={<MyIcon />}
              title="Stories"
              className="side-nav-sub-menu-item py-6 sidenav-border"
            >
            </SubMenu>
            <SubMenu
              prefix={<MyIcon />}
              title="Marketing"
              className="side-nav-sub-menu-item py-6 sidenav-border"
            >
            </SubMenu>
            <SubMenu
              prefix={<MyIcon />}
              title="Manage Staff"
              className="side-nav-sub-menu-item py-6 sidenav-border"
            >
            </SubMenu>





            <SubMenu
              prefix={<MyIcon />}
              title="Site Settings"
              className="side-nav-sub-menu-item border-b"
            >
              <MenuItem className="side-nav-menu-item">Set Default Values</MenuItem>
              <MenuItem className="side-nav-menu-item">General Settings</MenuItem>
              <MenuItem className="side-nav-menu-item">Email Templates</MenuItem>
              <MenuItem className="side-nav-menu-item">Contact Forms</MenuItem>
              <MenuItem className="side-nav-menu-item">Manage Site Styles</MenuItem>
              <MenuItem className="side-nav-menu-item">Other integrations</MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>

      </>


      {/* </div> */}
    </aside>
  );
};
export default Sidenav;

const MyIcon = () => <img src={SideBarIcon} alt="dasdsad" />

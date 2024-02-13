import React, { useContext, useState } from "react";
import { Grid } from "react-feather";
import { Link } from "react-router-dom";
import { Image } from "../../AbstractElements";
// import CubaIcon from '../../assets/images/logo/logo.png';
import CustomizerContext from "../../_helper/Customizer";

const SidebarLogo = () => {
  const { mixLayout, toggleSidebar, toggleIcon, layout, layoutURL } =
    useContext(CustomizerContext);

  const openCloseSidebar = () => {
    toggleSidebar(!toggleIcon);
  };

  const layout1 = localStorage.getItem("sidebar_layout") || layout;

  return (
    <div className="logo-wrapper">
      <div>
        <img
          style={{ width: "150px" }}
          src="https://metablocktechnologies.io/img/logo.png"
          alt=""
        />
      </div>
      <div className="back-btn" onClick={() => openCloseSidebar()}>
        <i className="fa fa-angle-left"></i>
      </div>
      {/* <div className='toggle-sidebar' onClick={openCloseSidebar}>
        <Grid className='status_toggle middle sidebar-toggle' />
      </div> */}
    </div>
  );
};

export default SidebarLogo;

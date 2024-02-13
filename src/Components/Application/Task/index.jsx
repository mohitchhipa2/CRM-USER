import React, { Fragment, useState } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import NavClass from "./NavClass";
import TabClass from "./TabClass";
import "./traningmodules.css"
import { Link, useNavigate } from "react-router-dom";

// import Trannig from "./Trannig";
const Task = () => {
  const newtaskdata = "";
  const [activeTab, setActiveTab] = useState("1");

  const activeToggle = (tab) => {
    setActiveTab(tab);
  };

  const navigate = useNavigate()

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Tranning Modules" parent="Apps" title="Tranning Modules" />
      <Container fluid={ true }>
        <div className="tranning-image" onClick={()=>navigate('/Trannig/Dubai')}>
          
          
        <img src="https://img.freepik.com/free-vector/business-landing-page-with-photo_52683-22912.jpg?size=626&ext=jpg&ga=GA1.1.1104414571.1702618059&semt=ais" alt="" />
      
        </div>
        {/* <Trannig/> */}
      </Container>
    </Fragment>
  );
};

export default Task;

import React, { Fragment, useState, useEffect, useCallback } from "react";
// import IconMarkUp from '../Icon-markup';
// import { Container, Row } from 'reactstrap';
// import axios from 'axios';
// import { ArrowsDirection, WebApp, Control, TextEditor, Brand } from '../../../Constant';
import { Breadcrumbs } from "../../../AbstractElements";
// import ThemifyCommon from './ThemifyCommon';
// import { ThemifyDataApi } from '../../../api';
import Dashboards from "../../Dashboard/Default/Dashboards";

const ThemifyIcons = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="DashBoard" parent="Icons" title="DashBoard" />
      <Dashboards />
    </Fragment>
  );
};

export default ThemifyIcons;

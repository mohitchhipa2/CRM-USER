import React from "react";
import "./NotificationNoticed.css";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Button } from "reactstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const NotificationNoticed = () => {
  const navigate = useNavigate("");
  return (
    <>
      <div className="Notification-container">
        <div className="Noticed-heading">
          <h5>Notification :</h5>
          <span>(3)</span>
        </div>
        <br />
        <div className="Notification-inner-container">
          <header>Today</header>
          <div className="notification-1-box">
            <div className="notification-1-inner-left-container">
              <div className="rex-box"></div>
              <div>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              </div>
              <div className="user-name">
                <h6>Nana Pathekar</h6>
                <p className="mt-2">Horry Up! You got 50% off. </p>
              </div>
            </div>
            <div className="notification-1-inner-right-container">
              <p>9:35 AM</p>
            </div>
          </div>
          <div className="notification-1-box">
            <div className="notification-1-inner-left-container">
              <div className="rex-box"></div>
              <div>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              </div>
              <div className="user-name">
                <h6>Nana Pathekar</h6>
                <p className="mt-2">Horry Up! You got 50% off. </p>
              </div>
            </div>
            <div className="notification-1-inner-right-container">
              <p>9:35 AM</p>
            </div>
          </div>
        </div>
        <div className="Notification-inner-container">
          <header>Yesterday</header>
          <div className="notification-1-box">
            <div className="notification-1-inner-left-container">
              <div className="rex-box"></div>
              <div>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              </div>
              <div className="user-name">
                <h6>Nana Pathekar</h6>
                <p className="mt-2">Horry Up! You got 50% off. </p>
              </div>
            </div>
            <div className="notification-1-inner-right-container">
              <p>9:35 AM</p>
            </div>
          </div>
        </div>
        <div className="GotoDashboard">
          <Link to={`${process.env.PUBLIC_URL}/dashboard/default/Dubai`}>
            <Button color="primary">Back To DashBoard</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotificationNoticed;

import React, { useContext, useEffect, useState } from "react";

import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { User } from "react-feather";
import { FaUser } from "react-icons/fa";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useNavigate } from "react-router";
import CustomizerContext from "../../../_helper/Customizer";

export default function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const navigate = useNavigate("");

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const history = useNavigate();
  const [profile, setProfile] = useState("");
  const [name, setName] = useState("Emay Walter");
  const { layoutURL } = useContext(CustomizerContext);
  const authenticated = JSON.parse(localStorage.getItem("authenticated"));
  const auth0_profile = JSON.parse(localStorage.getItem("auth0_profile"));

  useEffect(() => {
    setProfile(localStorage.getItem("profileURL"));
    setName(localStorage.getItem("Name") ? localStorage.getItem("Name") : name);
  }, []);

  const Logout = () => {
    localStorage.removeItem("profileURL");
    localStorage.removeItem("token");
    localStorage.removeItem("auth0_profile");
    localStorage.removeItem("Name");
    localStorage.setItem("authenticated", false);
    history(`${process.env.PUBLIC_URL}/login`);
  };

  const UserMenuRedirect = (redirect) => {
    history(redirect);
  };

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <div
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <AccountCircleRoundedIcon
            style={{
              fontSize: "large",
              //   background: "#A7A8AD",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              marginBottom: "20px",
            }}
          />{" "}
        </div>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    style={
                      {
                        //   background: "#262932",
                        //   color: "white",
                        //   marginTop: "20px",
                        //   boxShadow: "0px 0px 20px -6px gray",
                        //   padding: "5px 14px",
                      }
                    }
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      onClick={() => {
                        UserMenuRedirect(
                          `${process.env.PUBLIC_URL}/app/file-manager/${layoutURL}`
                        );
                      }}
                      style={{ padding: "5px 15px" }}
                    >
                      Profile
                    </MenuItem>

                    <MenuItem
                      onClick={() => navigate("./ChangePassword/Dubai")}
                    >
                      Change Password
                    </MenuItem>

                    {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                    <MenuItem
                      onClick={() => {
                        Logout(); // Call your custom Logout function
                      }}
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}

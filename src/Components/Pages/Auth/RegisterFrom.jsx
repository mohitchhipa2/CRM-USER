import React, { Fragment, useState, useEffect } from "react";
import { Facebook, Linkedin, Twitter } from "react-feather";
import { Form, FormGroup, Input, Label, Row, Col, Button } from "reactstrap";
import { Btn, H4, P, H6, Image } from "../../../AbstractElements";
import { Link, useLocation } from "react-router-dom";
import logoWhite from "../../../assets/images/logo/logo.png";
import logoDark from "../../../assets/images/logo/logo_dark.png";
import { Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { otpsend, signup } from "../../../userSlice";

const RegisterFrom = ({ logoClassMain }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [inviteCode, setInviteCode] = useState("refId");
  const [ref, setRef] = useState();
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [email, setEmail] = useState();
  const [type, setType] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referBy, setReferBy] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [referByName, setReferByName] = useState("");
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  const sendotp = async () => {
    dispatch(otpsend({ email, type }));
  };

  const signupapi = async () => {
    alert(firstName);
    dispatch(
      signup({
        first_name: firstName,
        last_name: lastName,
        email,
        mobile,
        password,
        cnf_password: confirmPassword,
        referBy,
        resetToken,
        refferByName: referByName,
        otp,
      })
    );
  };
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const refParam = searchParams.get("ref");
    console.log("🚀 ~ useEffect ~ refParam:", refParam);
    if (refParam) {
      setRef(refParam);
    }
  }, [location.search]);
  return (
    <Fragment>
      <div className="login-card">
        <div>
          <div>
            <Link
              className={`logo ${logoClassMain ? logoClassMain : ""}`}
              to={process.env.PUBLIC_URL}
            >
              <img src="/imagesmeta/metablocktwo.png" alt="" />
            </Link>
          </div>
          <div className="login-main">
            <Form className="theme-form login-form">
              <H4>Create your account</H4>
              <P>Enter your personal details to create account</P>
              <FormGroup>
                <Label className="col-form-label m-0 pt-0">Your Name</Label>
                <Row className="g-2">
                  <Col xs="6">
                    <Input
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      className="form-control"
                      type="text"
                      required=""
                      placeholder="Fist Name"
                    />
                  </Col>
                  {/* <Col xs="6">
                    <Input
                      className="form-control"
                      type="email"
                      required=""
                      placeholder="Last Name"
                      
                    />
                  </Col> */}
                </Row>
              </FormGroup>
              <FormGroup>
                <Label className="col-form-label m-0 pt-0">Last Name</Label>
                <Row className="g-2">
                  <Col xs="6">
                    <Input
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      className="form-control"
                      type="text"
                      required=""
                      placeholder="Fist Name"
                    />
                  </Col>
                  {/* <Col xs="6">
                    <Input
                      className="form-control"
                      type="email"
                      required=""
                      placeholder="Last Name"
                      
                    />
                  </Col> */}
                </Row>
              </FormGroup>
              <FormGroup style={{ position: "relative" }}>
                <Label className="col-form-label m-0 pt-0">Email.</Label>
                <div style={{ position: "relative" }}>
                  <Input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="form-control button-in-input"
                    type="text"
                    required=""
                    placeholder="Enter Email"
                  />
                  <div></div>
                  {!showOtpInput && (
                    <Button
                      className="get-opt-button"
                      style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        height: "100%",
                      }}
                      onClick={() => {
                        setShowOtpInput(true);
                        sendotp();
                      }}
                    >
                      Get Otp
                    </Button>
                  )}
                  {showOtpInput && (
                    <div style={{ marginTop: "10px" }}>
                      <Input
                        onChange={(e) => {
                          setOtp(e.target.value);
                        }}
                        style={{ marginTop: "10px" }}
                        type="text"
                        placeholder="enter otp"
                      />
                    </div>
                  )}
                </div>
              </FormGroup>

              <FormGroup className="position-relative">
                <Label className="col-form-label m-0 pt-0">Referral ID</Label>
                <div className="position-relative">
                  <Input
                    onChange={(e) => {
                      setReferBy(e.target.value);
                    }}
                    className="form-control"
                    type="name"
                    name="login[password]"
                    required
                    defaultValue={ref}
                  />
                </div>
              </FormGroup>
              <FormGroup className="position-relative">
                <Label className="col-form-label m-0 pt-0">Password</Label>
                <div className="position-relative">
                  <Input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="form-control"
                    type={togglePassword ? "text" : "password"}
                    name="login[password]"
                    required
                    placeholder="*********"
                  />
                  <div
                    className="show-hide"
                    onClick={() => setTogglePassword(!togglePassword)}
                  >
                    <span className={togglePassword ? "" : "show"}></span>
                  </div>
                </div>
              </FormGroup>
              <FormGroup className="position-relative">
                <Label className="col-form-label m-0 pt-0">
                  {" "}
                  Confirm Password
                </Label>
                <div className="position-relative">
                  <Input
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    className="form-control"
                    type={togglePassword ? "text" : "password"}
                    name="login[password]"
                    required
                    placeholder="*********"
                  />
                  <div
                    className="show-hide"
                    onClick={() => setTogglePassword(!togglePassword)}
                  >
                    <span className={togglePassword ? "" : "show"}></span>
                  </div>
                </div>
              </FormGroup>
              <FormGroup className="position-relative">
                <Label className="col-form-label m-0 pt-0">Referral Name</Label>
                <div className="position-relative">
                  <Input
                    onChange={(e) => {
                      setReferByName(e.target.value);
                    }}
                    className="form-control"
                    type="name"
                    name="login[password]"
                    required
                  />
                </div>
              </FormGroup>
              <FormGroup className="position-relative">
                <Label className="col-form-label m-0 pt-0">Moble No.</Label>
                <div className="position-relative">
                  <Input
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                    className="form-control"
                    type="name"
                    name="login[password]"
                    required
                  />
                </div>
              </FormGroup>
              <FormGroup className="position-relative">
                <Label className="col-form-label m-0 pt-0">
                  resat token Name
                </Label>
                <div className="position-relative">
                  <Input
                    onChange={(e) => {
                      setResetToken(e.target.value);
                    }}
                    className="form-control"
                    type="name"
                    name="login[password]"
                    required
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <select
                  style={{
                    width: "370px",
                    border: "1px solid #DEE2E6",
                    borderRadius: "5px",
                    background: "#F3F3FF",
                  }}
                >
                  <option>Staff</option>
                  <option>Freelancer</option>
                </select>
              </FormGroup>
              <FormGroup className="m-0">
                <div className="checkbox">
                  <Input id="checkbox1" type="checkbox" />
                  <Label className="text-muted" for="checkbox1">
                    Agree with <span>Privacy Policy</span>
                  </Label>
                </div>
              </FormGroup>
              <FormGroup>
                <Button
                  onClick={signupapi}
                  attrBtn={{
                    className: "d-block w-100",
                    color: "primary",
                    type: "submit",
                  }}
                >
                  Create Account
                </Button>
              </FormGroup>

              <P attrPara={{ className: "mb-0 text-start" }}>
                Already have an account?
                <Link className="ms-2" to={`${process.env.PUBLIC_URL}/login`}>
                  Sign in
                </Link>
              </P>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterFrom;

import React, { Fragment, useState, useEffect, useContext } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { Btn, H4, P } from "../AbstractElements";
import {
  EmailAddress,
  ForgotPassword,
  Password,
  RememberPassword,
  SignIn,
} from "../Constant";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import man from "../assets/images/dashboard/profile.png";

import CustomizerContext from "../_helper/Customizer";
import OtherWay from "./OtherWay";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../userSlice";

const Signin = ({ selected }) => {
  const [number, setNumber] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  const [togglePassword, setTogglePassword] = useState(false);
  const history = useNavigate();
  const { layoutURL } = useContext(CustomizerContext);
  const navigate = useNavigate();
  const [value, setValue] = useState(localStorage.getItem("profileURL" || man));
  const [name, setName] = useState(localStorage.getItem("Name"));
  const { isAuthenticated, error, isLoading, userData } = useSelector(
    (state) => state.custom2
  );
  useEffect(() => {
    localStorage.setItem("profileURL", man);
    localStorage.setItem("Name", "Emay Walter");
  }, [value, name]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [navigate, isAuthenticated, userData]);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const loginapi = async () => {
    dispatch(login({ email, password }));
  };

  return (
    <Fragment>
      <Container fluid={true} className="p-0 login-page">
        <Row>
          <Col xs="12">
            <div className="login-card">
              <div className="login-main login-tab">
                <Form className="theme-form">
                  <H4>
                    {selected === "simpleLogin"
                      ? ""
                      : "Sign In With Simple Login"}
                  </H4>
                  <P>{"Enter your number & password to login"}</P>
                  <FormGroup>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input
                      className="form-control"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </FormGroup>
                  <FormGroup className="position-relative">
                    <Label className="col-form-label">{Password}</Label>
                    <div className="position-relative">
                      <Input
                        className="form-control"
                        type={togglePassword ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                      <div
                        className="show-hide"
                        onClick={() => setTogglePassword(!togglePassword)}
                      >
                        <span className={togglePassword ? "" : "show"}></span>
                      </div>
                    </div>
                  </FormGroup>
                  <div className="position-relative form-group mb-0">
                    <div className="checkbox">
                      <Input id="checkbox1" type="checkbox" />
                      <Label className="text-muted" for="checkbox1">
                        {RememberPassword}
                      </Label>
                    </div>

                    <Link
                      className="link"
                      to={`${process.env.PUBLIC_URL}/pages/authentication/forget-pwd`}
                    >
                      {ForgotPassword}
                    </Link>
                    <Button
                      onClick={loginapi}
                      attrBtn={{
                        color: "primary",
                        className: "d-block w-100 mt-2",
                      }}
                    >
                      {SignIn}
                    </Button>
                  </div>
                  <OtherWay />
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </Fragment>
  );
};

export default Signin;

import React, { Fragment, useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Table,
} from "reactstrap";
import { Breadcrumbs } from "@mui/material";
import { SiMoneygram } from "react-icons/si";
import { GrMoney } from "react-icons/gr";
import { MdOutlineMoney } from "react-icons/md";

const UsersEditContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Daily Task" parent="Widgets" title="Daily Task" />
      <Container fluid={true} classLevelIncome="general-widget">
        {/* ... (unchanged) */}

        <Row style={{ marginTop: "50px" }}>
          <div className="dashboard-row-1 row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div className="col devanshu">
              <div className="card-1 radius-10">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0 text-primary">9526</h5>
                    <div className="ms-auto">
                      <MdOutlineMoney
                        style={{ fontSize: "25px" }}
                        className="bx bx-cart fs-3 text-primary"
                      />
                    </div>
                  </div>
                  <div className="progress my-2" style={{ height: 4 }}>
                    <div
                      role="progressbar"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="progress-bar bg-primary"
                      // style={{ width: "55%" }}
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="mb-0">Project Income</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col devanshu">
              <div className="card-1 radius-10">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0 text-success">$8323</h5>
                    <div className="ms-auto">
                      <SiMoneygram
                        style={{ fontSize: "25px" }}
                        className="bx bx-dollar fs-3 text-success"
                      />
                    </div>
                  </div>
                  <div className="progress my-2" style={{ height: 4 }}>
                    <div
                      role="progressbar"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="progress-bar bg-success"
                      // style={{ width: "55%" }}
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="mb-0"> Level Income</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col devanshu">
              <div className="card-1 radius-10">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0 text-danger">6200</h5>
                    <div className="ms-auto">
                      <GrMoney
                        style={{ fontSize: "25px" }}
                        className="bx bx-group fs-3 text-danger"
                      />
                    </div>
                  </div>
                  <div className="progress my-2" style={{ height: 4 }}>
                    <div
                      role="progressbar"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="progress-bar bg-danger"
                      // style={{ width: "55%" }}
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="mb-0">Referral income</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-row-1 row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div className="col devanshu">
              <div className="card-1 radius-10">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0 text-primary">9526</h5>
                    <div className="ms-auto">
                      <MdOutlineMoney
                        style={{ fontSize: "25px" }}
                        className="bx bx-cart fs-3 text-primary"
                      />
                    </div>
                  </div>
                  <div className="progress my-2" style={{ height: 4 }}>
                    <div
                      role="progressbar"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="progress-bar bg-primary"
                      // style={{ width: "55%" }}
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="mb-0">Task Income</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col devanshu">
              <div className="card-1 radius-10">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0 text-success">$8323</h5>
                    <div className="ms-auto">
                      <SiMoneygram
                        style={{ fontSize: "25px" }}
                        className="bx bx-dollar fs-3 text-success"
                      />
                    </div>
                  </div>
                  <div className="progress my-2" style={{ height: 4 }}>
                    <div
                      role="progressbar"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="progress-bar bg-success"
                      // style={{ width: "55%" }}
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="mb-0">Reward Income</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col devanshu">
              <div className="card-1 radius-10">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0 text-danger">6200</h5>
                    <div className="ms-auto">
                      <GrMoney
                        style={{ fontSize: "25px" }}
                        className="bx bx-group fs-3 text-danger"
                      />
                    </div>
                  </div>
                  <div className="progress my-2" style={{ height: 4 }}>
                    <div
                      role="progressbar"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="progress-bar bg-danger"
                      // style={{ width: "55%" }}
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="mb-0">Total Income</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </Fragment>
  );
};

export default UsersEditContain;

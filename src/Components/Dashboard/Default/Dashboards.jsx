import React, { Fragment, useState } from "react";
import "./Dashboarddata.css";
import { TbMoneybag } from "react-icons/tb";
import { GiMoneyStack, GiReceiveMoney } from "react-icons/gi";
import { FaHandHoldingDollar, FaRegCopy } from "react-icons/fa6";
import { MdOutlineMoney } from "react-icons/md";
import { SiMoneygram } from "react-icons/si";
import { GrMoney } from "react-icons/gr";
import { Button } from "reactstrap";

const Dashboards = () => {
  const [copied, setCopied] = useState(false);
  const [copieds, setCopieds] = useState(false);

  const handleCopyClick = () => {
    const referralLink = document.getElementById("referralLink");

    if (referralLink) {
      const range = document.createRange();
      range.selectNode(referralLink);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();

      setCopied(true);

      // Reset the copied state after a brief period
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    }
  };

  const handleCopyClicks = () => {
    const webinarLink = document.getElementById("webinarLink");

    if (webinarLink) {
      const range = document.createRange();
      range.selectNode(webinarLink);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();

      setCopieds(true);

      // Reset the copied state after a brief period
      setTimeout(() => {
        setCopieds(false);
      }, 1500);
    }
  };

  return (
    <div>
      <Fragment>
        <div className="dashboard-row-1 row-cols-1 row-cols-md-4 row-cols-xl-2">
          <div className="col devanshu">
            <div className="card-2 radius-10 h-70 ">
              <div className="User-profile-divs">
                <div>
                  <div className="User-profile-image-div">
                    <img
                      style={{ width: "48px" }}
                      src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
                      alt=""
                    />
                  </div>
                  <h4>User</h4>
                </div>
                <div className="user-id">
                  <h5>USER ID:- 32</h5>
                  <p>
                    <span style={{ fontWeight: "bold", color: "black" }}>
                      Email:-
                    </span>
                    userganesh@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col devanshu">
            <div

              className="card-2 radius-10"
            >
              <div>
                <h4
                  style={{
                    color: "#7366FF",
                    fontFamily: "arial",
                    fontWeight: "bold",
                  }}
                >
                  Referral Link :-
                </h4>
              </div>
              <div className="my-referral-link">
                <div
                  className="referalbuttonslink"
                  style={{
                    // width: "100%",
                    // marginTop: "0",
                    padding: "10px 20px",
                    // marginBottom: "1rem",
                  }}
                  id="referralLink"
                >
                  <span>https://www.hostinger.com</span>
                  <FaRegCopy
                    onClick={handleCopyClick}
                    style={{ fontSize: "25px", cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" row-cols-1 row-cols-md-4 row-cols-xl-1">
          <div className="col devanshu">
            <div className="card radius-10 cards-menu">
              <div className="announcement">
                <h4
                  style={{
                    color: "#7366FF",
                    fontFamily: "arial",
                    fontWeight: "bold",
                  }}
                >
                  Announcement
                </h4>

                <marquee behavior="" direction="left">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laboriosam ab ad sapiente repellendus quibusdam veritatis quae
                  vero enim doloribus labore?
                </marquee>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-row-1 row-cols-1 row-cols-md-2 row-cols-xl-4">
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
                  <p className="mb-0">Affiliate Bonus</p>
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
                  <p className="mb-0">Task Reward Bonus</p>
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
                  <p className="mb-0">Total Member</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col devanshu">
            <div className="card-1 radius-10">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <h5 className="mb-0 text-warning">5630</h5>
                  <div className="ms-auto">
                    <SiMoneygram
                      style={{ fontSize: "25px" }}
                      className="bx bx-dollar fs-3 text-warning"
                    />
                  </div>
                </div>
                <div className="progress my-2" style={{ height: 4 }}>
                  <div
                    role="progressbar"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="progress-bar bg-warning"
                  // style={{ width: "55%" }}
                  />
                </div>
                <div className="d-flex align-items-center">
                  <p className="mb-0">My Referral</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-row-1  row-cols-1 row-cols-md-2 row-cols-xl-4">
          <div className="col devanshu">
            <div className="card-1 radius-10">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <h5 className="mb-0 text-primary">9526</h5>
                  <div className="ms-auto">
                    <TbMoneybag
                      style={{ fontSize: "25px" }}
                      className="text-primary"
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
                  <p className="mb-0">Total Project Amount</p>
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
                    <GiReceiveMoney
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
                  <p className="mb-0">Project Refund Amount</p>
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
                    <GiMoneyStack
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
                  <p className="mb-0">Project Remaining Amount</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col devanshu">
            <div className="card-1 radius-10">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <h5 className="mb-0 text-warning">5630</h5>
                  <div className="ms-auto">
                    <FaHandHoldingDollar
                      style={{ fontSize: "25px" }}
                      className="bx bx-envelope fs-3 text-warning"
                    />
                  </div>
                </div>
                <div className="progress my-2" style={{ height: 4 }}>
                  <div
                    role="progressbar"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="progress-bar bg-warning"
                  // style={{ width: "55%" }}
                  />
                </div>
                <div className="d-flex align-items-center">
                  <p className="mb-0">Total Withdrawl</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-row-1  row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col devanshu">
            <div className="card-1 radius-10">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <h5 className="mb-0 text-primary">9526</h5>
                  <div className="ms-auto">
                    <TbMoneybag
                      style={{ fontSize: "25px" }}
                      className="text-primary"
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
                  <p className="mb-0">Project Referral Income</p>
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
                    <GiReceiveMoney
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
                  <p className="mb-0">Project Level Income</p>
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
                    <GiMoneyStack
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

        <div className="dashboard-row-1 row-cols-1 row-cols-md-4 row-cols-xl-2">
          <div className="col devanshu">
            <div className="card-3 radius-10 ">
              <div className="blacks-div">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3
                    style={{
                      color: "#7366FF",
                      fontFamily: "arial",
                      fontWeight: "bold",
                    }}
                  >
                    Task Status
                  </h3>
                  <Button color="primary">Claim Task</Button>
                </div>
                <div className="first-row">
                  <div className="first-row-div">1</div>
                  <div className="first-row-div">2</div>
                  <div className="first-row-div">3</div>
                  <div className="first-row-div">4</div>
                  <div className="first-row-div">5</div>
                  <div className="first-row-div">6</div>
                  <div className="first-row-div">7</div>
                  <div className="first-row-div">8</div>
                  <div className="first-row-div">9</div>
                  <div className="first-row-div">10</div>
                </div>
                <div className="first-row">
                  <div className="first-row-div">11</div>
                  <div className="first-row-div">12</div>
                  <div className="first-row-div">13</div>
                  <div className="first-row-div">14</div>
                  <div className="first-row-div">15</div>
                  <div className="first-row-div">16</div>
                  <div className="first-row-div">17</div>
                  <div className="first-row-div">18</div>
                  <div className="first-row-div">19</div>
                  <div className="first-row-div">20</div>
                </div>
                <div className="first-row">
                  <div className="first-row-div">21</div>
                  <div className="first-row-div">22</div>
                  <div className="first-row-div">23</div>
                  <div className="first-row-div">24</div>
                  <div className="first-row-div">25</div>
                  <div className="first-row-div">26</div>
                  <div className="first-row-div">27</div>
                  <div className="first-row-div">28</div>
                  <div className="first-row-div">29</div>
                  <div className="first-row-div">30</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col devanshu">
            <div style={{}} className="card-3-2 radius-10">
              <div>
                <h4
                  style={{
                    color: "#7366FF",
                    fontFamily: "arial",
                    fontWeight: "bold",
                  }}
                >
                  Webinar Link :-
                </h4>
              </div>
              <div className="webinarjoindiv">
                <div className="my-referral-link">
                  <div
                    className="referalbuttonslink"
                    style={{
                      // width: "100%",
                      // marginTop: "0",
                      padding: "10px 20px",
                      // marginBottom: "1rem",
                    }}
                    id="referralLink"
                  >
                    <span>https://www.hostinger.com</span>
                    <FaRegCopy
                      onClick={handleCopyClick}
                      style={{ fontSize: "25px", cursor: "pointer" }}
                    />
                  </div>
                </div>
                <div className="join-btn">
                  <Button style={{ marginTop: "20px", height: "50px" }}>
                    <a style={{ color: "white" }} href="jdcjsc" target="_blank">
                      Join Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" row-cols-1 row-cols-md-4 row-cols-xl-1">
          <div className="col devanshu">
            <div className="card radius-10 cards-menu">
              <div className="announcement">
                <h4
                  style={{
                    color: "#7366FF",
                    fontFamily: "arial",
                    fontWeight: "bold",
                  }}
                >
                  Announcement
                </h4>

                <marquee behavior="" direction="left">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laboriosam ab ad sapiente repellendus quibusdam veritatis quae
                  vero enim doloribus labore?
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default Dashboards;

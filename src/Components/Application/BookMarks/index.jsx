import React, { Fragment, useContext, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Media,
  Row,
  Table,
} from "reactstrap";
import { MarkJecno, MARKJENCOEMAIL } from "../../../Constant";
import NavTab from "./NavTab";
import { Link } from "react-router-dom";
import Img from "../../../assets/images/user/user.png";
import { Image, P, H6, Btn, Breadcrumbs } from "../../../AbstractElements";
import BookmarksTabs from "./BookmarksTabs";
import CustomizerContext from "../../../_helper/Customizer";
import "./withdraw.css";
import { toast } from "react-toastify";
import { FaSort } from "react-icons/fa";
import { SiMoneygram } from "react-icons/si";

const BookmarksContain = () => {
  const { layoutURL } = useContext(CustomizerContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showOTP, setShowOTP] = useState(false); // State to manage OTP visibility
  const [upiId, setUpiId] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const withdrawdata = [
    {
      sno: "1",
      amount: "300",
      method: "Paytm",
      status: "pennding",
      message: "withdraw",
      date: "12/02/2024",
      time: "12:am",
    },
    {
      sno: "2",
      amount: "100",
      method: "Phonepe",
      status: "approved",
      message: "withdraw",
      date: "14/04/2024",
      time: "2:00 Am",
    },
  ];

  const withdraw = () => {
    // Check if withdrawal amount and UPI ID are provided
    if (withdrawAmount.trim() === "" || upiId.trim() === "") {
      toast.error("Please enter the withdrawal amount ");
      return;
    }
    // Proceed with withdrawal
    toast.success("Withdraw Successful");
  };

  const [searchTermone, setSearchTermone] = useState(""); // Step 1
  const handleSearchChangeone = (e) => {
    setSearchTermone(e.target.value);
  };

  const filteredwithdrawdata = withdrawdata.filter((item) => {
    // Step 3
    return (
      item.sno.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.amount.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.image.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.message.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.date.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.time.toLowerCase().includes(searchTermone.toLowerCase())
    );
  });

  const copyTableone = () => {
    const table = document.getElementById("myTableone");

    if (!table) {
      console.error("Table not found");
      return;
    }

    const range = document.createRange();
    range.selectNode(table);

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      document.execCommand("copy");
      alert("Table copied to clipboard!"); // Show a simple notification
    } catch (err) {
      console.error("Unable to copy table to clipboard", err);
    } finally {
      window.getSelection().removeAllRanges();
    }
  };

  const downloadTableAsCSVone = () => {
    const table = document.getElementById("myTableone");

    if (!table) {
      console.error("Table not found");
      return;
    }

    const rows = table.querySelectorAll("tr");
    const csvData = [];

    rows.forEach((row) => {
      const rowData = [];
      const cells = row.querySelectorAll("td, th");

      cells.forEach((cell) => {
        rowData.push(cell.innerText);
      });

      csvData.push(rowData.join(","));
    });

    const csvContent = csvData.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "table_data.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrintone = () => {
    window.print();
  };

  const handleOTPButtonClick = () => {
    // Show OTP section when OTP button is clicked
    setShowOTP(true);
  };

  const handleValidateButtonClick = () => {
    setShowOTP(false); // Hide the OTP section when "Validate" button is clicked
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Withdraw" parent="Apps" title="Withdraw" />
      <Container fluid={true}>
        <div
          className="withdrawmoenyinputs"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div className="avialablebalance">
            <div className="d-flex align-items-center justify-between w-100">
              <h5 className="mb-0 text-success">Current Balance</h5>
              <div className="ms-auto">
                <SiMoneygram
                  style={{ fontSize: "25px" }}
                  className="bx bx-dollar fs-3 text-success"
                />
              </div>
            </div>
            <div className="progress my-2" style={{ height: 4, width: "100%" }}>
              <div
                role="progressbar"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
                className="progress-bar bg-success"
                // style={{ width: "55%" }}
              />
            </div>
            <span>₹5000</span>
          </div>

          <div className="withdraw-main">
            <div className="withdrawinputs">
              <div className="withdrawtwoinput">
                <Input
                  className="withdrawinputfiled"
                  type="text"
                  placeholder="enter your amount"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  required
                />
                <Input
                  className="withdrawinputfiled"
                  type="text"
                  placeholder="enter your Upi Id"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  required
                />
              </div>
              <div className="bbb-wrapper fl-wrap">
                <div className="subcribe-form fl-wrap">
                  <form
                    style={{ display: "flex" }}
                    id="subscribe"
                    noValidate="true"
                  >
                    <Input
                      className="enteremail"
                      name="EMAIL"
                      id="subscribe-email"
                      placeholder="Email"
                      spellCheck="false"
                      type="text"
                    />
                    <Button
                      type="button" // Change to button type
                      id="subscribe-button"
                      className="subscribe-button color-bg"
                      onClick={handleOTPButtonClick} // Handle OTP button click
                    >
                      OTP
                    </Button>
                  </form>
                </div>
              </div>
              {showOTP && (
                <div className="container height-100 d-flex justify-content-center align-items-center">
                  <div className="position-relative">
                    <div className="card p-2 text-center">
                      <h6>
                        Please Enter the OTP <br /> To Verify Your Account
                      </h6>

                      <div
                        id="otp"
                        className="inputs d-flex flex-row justify-content-center mt-2"
                      >
                        <input
                          className="m-2 text-center form-control rounded"
                          type="text"
                          id="first"
                          maxLength={1}
                        />
                        <input
                          className="m-2 text-center form-control rounded"
                          type="text"
                          id="second"
                          maxLength={1}
                        />
                        <input
                          className="m-2 text-center form-control rounded"
                          type="text"
                          id="third"
                          maxLength={1}
                        />
                        <input
                          className="m-2 text-center form-control rounded"
                          type="text"
                          id="fourth"
                          maxLength={1}
                        />
                        <input
                          className="m-2 text-center form-control rounded"
                          type="text"
                          id="fifth"
                          maxLength={1}
                        />
                        <input
                          className="m-2 text-center form-control rounded"
                          type="text"
                          id="sixth"
                          maxLength={1}
                        />
                      </div>
                      <div className="mt-4">
                        <button
                          className="btn btn-danger px-4 validate"
                          onClick={handleValidateButtonClick} // Handle Validate button click
                        >
                          Validate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <Button onClick={withdraw}>Withdraw</Button>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "100px" }}>
          <div className="withdrawtablebutton">
            <div>
              <Input
                className="searchdaily"
                type="text"
                placeholder="Search..."
                value={searchTermone}
                onChange={handleSearchChangeone}
                style={{
                  height: "35px",
                  width: "380px",
                }}
              />
            </div>
            <div className="tableworkbuttondaily">
              <Button color="primary" onClick={copyTableone}>
                Copy
              </Button>
              <Button color="primary" onClick={downloadTableAsCSVone}>
                CSV
              </Button>
              <Button color="primary" onClick={downloadTableAsCSVone}>
                Excel
              </Button>
              <Button color="primary" onClick={handlePrintone}>
                Print
              </Button>
            </div>
          </div>
          <div className="dailytasktable" style={{ overflowX: "auto" }}>
            <Table id="myTableone">
              <thead>
                <tr>
                  <th>
                    Sno.
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th>
                    Amount
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th>
                    Method
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th>
                    Status
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th>
                    Date
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th>
                    Time
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredwithdrawdata.map((item, index) => (
                  <tr key={index}>
                    <td>{item.sno}</td>
                    <td>{item.amount}</td>
                    <td>{item.method}</td>
                    <td
                      style={{
                        color: item.status === "Complete" ? "blue" : "red",
                      }}
                    >
                      {item.status}
                    </td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="pagination-first">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};
export default BookmarksContain;

import React, { Fragment, useContext, useRef, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Row,
  Table,
} from "reactstrap";
import ChatMenu from "../ChatApp/ChatMenu";
import { Breadcrumbs } from "../../../../AbstractElements";
import ChatStatus from "./ChatStatus";
import VideoHistory from "./VideoHistory";
import ChatHeader from "../ChatApp/ChatHeader";
import ChatAppContext from "../../../../_helper/Chat";
import "./refer.css";
import { FaSort } from "react-icons/fa";
const VideoChatContain = () => {
  const { menuToggle } = useContext(ChatAppContext);
  const [Allreferral, setAllreferral] = useState([
    {
      SNo: "1",
      Name: "rahul",
      Userid: "45",
      image: "hello.jpg",
      Mobileno: "6767766776",
      Email: "xyz@gmail.com",
      referralname: "rohit",
      referralid: "78",
      totalprojectamount: "2.45lakn",
      amountreceive: "50k",
      totalearning: "10k",
      totalmember: "34",
      totalreferral: "33",
      jioningdate: "21/02/2024",
      status: "active",
    },
    {
      SNo: "2",
      Name: "ganesh",
      Userid: "40",
      image: "hello.jpg",
      Mobileno: "7240696756",
      Email: "abc@gmail.com",
      referralname: "shyam",
      referralid: "35",
      totalprojectamount: "2.95lakn",
      amountreceive: "150k",
      totalearning: "100k",
      totalmember: "54",
      totalreferral: "43",
      jioningdate: "21/03/2024",
      status: "active",
    },
    {
      SNo: "3",
      Name: "vaibhav",
      Userid: "49",
      image: "hello.jpg",
      Mobileno: "6867766776",
      Email: "rye@gmail.com",
      referralname: "kalu",
      referralid: "98",
      totalprojectamount: "2.95lakn",
      amountreceive: "60k",
      totalearning: "80k",
      totalmember: "64",
      totalreferral: "33",
      jioningdate: "01/07/2024",
      status: "done",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState(""); // Step 1

  // ... (unchanged)

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  /**searchfilter */
  const tableRef = useRef(null);

  const copyTable = () => {
    const table = document.getElementById("myTable");

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

  const handlePrint = () => {
    window.print();
  };

  const downloadTableAsCSV = () => {
    const table = document.getElementById("myTable");

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
  const [sortOrder, setSortOrder] = useState("asc");
  const sortByUserNameone = () => {
    const sortedData = [...Allreferral].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.SNo.localeCompare(b.SNo);
      } else {
        return b.SNo.localeCompare(a.SNo);
      }
    });
    setAllreferral(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="All referral"
        parent="Chat"
        title="All referral"
      />
      <Row style={{ marginTop: "20px" }}>
        <Col xl="12">
          <h3
            style={{
              color: "#7366FF",
              fontFamily: "arial",
              fontWeight: "bold",
            }}
          >
            All Referral
          </h3>
          <div style={{ display: "flex" }} className="workinputnutton">
            <div
            //   style={ {
            //     display: "flex",
            //     position: "relative",
            //     left: "66%",
            //     top: "0",
            //     gap: "5px"
            // } }
            >
              <Input
                className="searchdaily"
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={{
                  height: "35px",
                  width: "380px",
                  // marginTop:"15px"
                  // position: "absolute"
                }}
              />
            </div>
            <div className="tableworkbuttondaily">
              <Button
                color="primary"
                // style={{
                //   border: "1px solid #DEE2E6",
                //   width: "70px",
                //   height: "30px",
                // }}
                onClick={copyTable}
              >
                Copy
              </Button>
              <Button
                color="primary"
                // style={{
                //   border: "1px solid #DEE2E6",
                //   width: "70px",
                //   height: "30px",
                // }}
                onClick={downloadTableAsCSV}
              >
                CSV
              </Button>
              <Button
                color="primary"
                // style={{
                //   border: "1px solid #DEE2E6",
                //   width: "70px",
                //   height: "30px",
                // }}
                onClick={downloadTableAsCSV}
              >
                Excel
              </Button>
              <Button color="primary" onClick={handlePrint}>
                Print
              </Button>
            </div>
          </div>
          <div className="dailytasktable dailytasktable-1">
            <Table id="myTable" className="myTablerefrel">
              <thead>
                <tr>
                  <th onClick={sortByUserNameone}>
                    S.No
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th onClick={sortByUserNameone}>
                    Name
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th onClick={sortByUserNameone}>
                    UserID
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th onClick={sortByUserNameone}>
                    Image
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th onClick={sortByUserNameone}>
                    Mobile No
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th onClick={sortByUserNameone}>
                    Email ID
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th onClick={sortByUserNameone}>
                    referral
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th onClick={sortByUserNameone}>
                    referralId
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th onClick={sortByUserNameone}>
                    Amount
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th onClick={sortByUserNameone}>
                    Amount receive
                    <FaSort style={{ color: "#BABABA" }} />{" "}
                  </th>
                  <th>
                    total earning <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th onClick={sortByUserNameone}>
                    total member
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th onClick={sortByUserNameone}>
                    total referral
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th onClick={sortByUserNameone}>
                    jioning date
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th onClick={sortByUserNameone}>
                    status
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {Allreferral.map((item, index) => (
                  <tr key={index}>
                    <td>{item.SNo}</td>
                    <td>{item.Name}</td>
                    <td>{item.Userid}</td>
                    <td>{item.image}</td>
                    <td>{item.Mobileno}</td>
                    <td>{item.Email}</td>
                    <td>{item.referralname}</td>
                    <td>{item.referralid}</td>
                    <td>{item.totalprojectamount}</td>
                    <td>{item.amountreceive}</td>
                    <td>{item.totalearning}</td>
                    <td>{item.totalmember}</td>
                    <td>{item.totalreferral}</td>
                    <td>{item.jioningdate}</td>
                    <td>{item.status}</td>
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
        </Col>
      </Row>
    </Fragment>
  );
};
export default VideoChatContain;

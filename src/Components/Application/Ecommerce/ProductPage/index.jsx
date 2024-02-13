import BrandShipping from "./BrandShipping";
import ImageSlider from "./ImageSilder";
import ProductDetails from "./ProductDetails";
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
import { Fragment, useRef, useState } from "react";
import React from "react";
import Tablet from "./Tabsets";
import { Breadcrumbs } from "../../../../AbstractElements";
import "./webinar.css";
import { FaRegCopy, FaSort } from "react-icons/fa";
import { toast } from "react-toastify";
import WebinarSlider from "./WebinarSlider";

const ProductPageContain = () => {
  const [webinarData, setWebinarData] = useState([
    {
      serialNumber: 1,
      createdByUserName: "User123",
      createdByAdmin: "AdminXYZ",
      webinarDate: "2024-02-01",
      webinarTopic: "JavaScript",
      startTime: "10:00 AM",
      duration: "1 hour",
      description: "programming language",
      link: "https://example.com",
      remark: "Great session",
    },
    {
      serialNumber: 2,
      createdByUserName: "User21",
      createdByAdmin: "Admin123",
      webinarDate: "2024-05-02",
      webinarTopic: "css",
      startTime: "13:00 PM",
      duration: "4 hour",
      description: " language",
      link: "https://website.com",
      remark: "Great website",
    },
    // You can add more entries as needed
  ]);

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
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredwebinarData = webinarData.filter((list) => {
    // Step 3
    return (
      // list.serialNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      list.createdByUserName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      list.createdByAdmin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      list.webinarDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      list.webinarTopic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      list.startTime.toLowerCase().includes(searchTerm.toLowerCase()) ||
      list.duration.toLowerCase().includes(searchTerm.toLowerCase()) ||
      list.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      list.link.toLowerCase().includes(searchTerm.toLowerCase()) ||
      list.remark.toLowerCase().includes(searchTerm.toLowerCase())
      // item.EditDelete.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  const [sortOrder, setSortOrder] = useState("asc");
  const sortByUserNameone = () => {
    const sortedData = [...webinarData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.serialNumber - b.serialNumber; // Numerical comparison
      } else {
        return b.serialNumber - a.serialNumber; // Numerical comparison
      }
    });
    setWebinarData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  const copyTables = (taskLink) => {
    const range = document.createRange();
    const dummyElement = document.createElement("textarea");
    dummyElement.value = taskLink;

    document.body.appendChild(dummyElement);
    dummyElement.select();
    document.execCommand("copy");
    document.body.removeChild(dummyElement);

    toast.success("Link copied to clipboard!");
  };
  return (
    <Fragment>
      <Breadcrumbs parent="Webinar" title="Webinar" mainTitle="Webinar" />
      <Container fluid={true}>
        <div className="webinardetails">
          <h4
            style={{
              textAlign: "center",
              color: "#7366FF",
              fontFamily: "arial",
              fontWeight: "bold",
            }}
          >
            Webinar Details
          </h4>

          <WebinarSlider />
          <h2
            style={{
              marginTop: "20px",
              color: "#7366FF",
              fontFamily: "arial",
              fontWeight: "bold",
            }}
          >
            Webinar Details
          </h2>

          <div style={{ display: "flex" }} className="tableworkbutton">
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
          <div style={{ overflowX: "auto" }}>
            <Table className="webinartable" id="myTable">
              <thead>
                <tr style={{ borderBottom: "1px solid #272727" }}>
                  <th onClick={sortByUserNameone}>
                    S. No. <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  {/* <th> created by user name</th> */}
                  <th onClick={sortByUserNameone}>
                    created by admin
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th onClick={sortByUserNameone}>
                    {" "}
                    Webinar date
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th onClick={sortByUserNameone}>
                    Webinar topic
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th onClick={sortByUserNameone}>
                    Start Time
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th onClick={sortByUserNameone}>
                    {" "}
                    Duration
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th onClick={sortByUserNameone}>
                    Discription
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th onClick={sortByUserNameone}>
                    link
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th onClick={sortByUserNameone}>
                    Remark
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredwebinarData.map((list, index) => (
                  <tr style={{ borderBottom: "1px solid #272727" }}>
                    <td>{list.serialNumber}</td>
                    {/* <td>{list.createdByUserName}</td> */}
                    <td>{list.createdByAdmin}</td>
                    <td>{list.webinarDate}</td>
                    <td>{list.webinarTopic}</td>
                    <td>{list.startTime}</td>
                    <td>{list.duration}</td>
                    <td>{list.description}</td>
                    <td>
                      {list.link}
                      <FaRegCopy
                        style={{ cursor: "pointer", marginLeft: "10px" }}
                        onClick={() => copyTables(list.link)}
                      />
                    </td>
                    <td>{list.remark}</td>
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
export default ProductPageContain;

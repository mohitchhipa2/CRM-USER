import React, { Fragment, useRef, useState } from "react";
import { Breadcrumbs } from "../../../../AbstractElements";
import ChatStatus from "./ChatStatus";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import Chatting from "./Chatting";
import { RxCross2 } from "react-icons/rx";
import "./Table.css";
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
import { FaCheck, FaSort } from "react-icons/fa";
import ViewProjectData from "./ViewProjectData";

const ChatAppContain = () => {
  const [Projectconverted, setProjectconverted] = useState([
    {
      Date: "21/01/2024",
      ProjectName: "Crm",
      Discrption: "done",
      quotation: "2lakh",
      finalprice: "1.5lak",
      Advancepaid: "30000",
      remaingamount: "20000",
      Projectduration: "2month",
      paidagain: "20000",
      remark: "done",
    },
    {
      Date: "21/02/2024",
      ProjectName: "Crm",
      Discrption: "pending",
      quotation: "2lakh",
      finalprice: "1.5lak",
      Advancepaid: "30000",
      remaingamount: "20000",
      Projectduration: "2month",
      paidagain: "20000",
      remark: "done",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState(""); // Step 1

  // ... (unchanged)

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const [editingIndex, setEditingIndex] = useState(null);
  const [editedPaidAgain, setEditedPaidAgain] = useState("");

  const handleEdit = (index, paidAgain) => {
    setEditingIndex(index);
    setEditedPaidAgain(paidAgain);
  };

  const handleSave = (index) => {
    const updatedData = [...Projectconverted];
    updatedData[index].paidagain = editedPaidAgain;

    setProjectconverted(updatedData);
    setEditingIndex(null);
    setEditedPaidAgain("");
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setEditedPaidAgain("");
  };
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

  // const [Projectconverted, setProjectconverted]= useState()

  const handledate = () => {
    const sortedData = [...Projectconverted].sort((a, b) => {
      const [dayA, monthA, yearA] = a.Date.split("/");
      const [dayB, monthB, yearB] = b.Date.split("/");

      const dateA = new Date(`${yearA}-${monthA}-${dayA}`);
      const dateB = new Date(`${yearB}-${monthB}-${dayB}`);

      // Set the time to midnight to only consider the date portion
      dateA.setHours(0, 0, 0, 0);
      dateB.setHours(0, 0, 0, 0);

      if (sortOrder === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });

    console.log("Sorted Data:", sortedData);

    setProjectconverted(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const [pdfFiles, setPdfFiles] = useState([]);

  // Function to handle PDF file upload
  const handlePdfUpload = (event) => {
    const files = event.target.files;
    setPdfFiles([...pdfFiles, ...files]);
  };

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Project converted"
        parent="Chat"
        title="Project converted"
      />

      <Row style={{ marginTop: "20px" }}>
        <Col xl="12">
          <h3
            style={{
              color: "#7366FF",
              fontFamily: "arial",
              fontWeight: "bold",
            }}
            className="projects-history"
          >
            Project Converted History
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
            <Table id="myTable" className="myTable-1">
              <thead>
                <tr>
                  <th onClick={handledate}>
                    Date
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th
                  // onClick={ sortByTaskName }
                  >
                    Project Name
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th
                  // onClick={ sortByTaskLink }
                  >
                    Discrption
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th
                  // onClick={ sortByRemark }
                  >
                    quotation price
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th
                  // onClick={ sortByStatus }
                  >
                    final price
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th
                  // onClick={ sortByApproval }
                  >
                    Total paid
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th
                  // onClick={ sortByApproval }
                  >
                    remaing price
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th
                  // onClick={ sortByApproval }
                  >
                    Project time
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th
                  // onClick={ sortByApproval }
                  >
                    paid again
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th
                  // onClick={ sortByApproval }
                  >
                    remark
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th>View</th>
                  <th>Status</th>
                  <th>PDF Files</th>
                </tr>
              </thead>
              <tbody>
                {Projectconverted.map((item, index) => (
                  <tr key={index}>
                    <td>{item.Date}</td>
                    <td>{item.ProjectName}</td>
                    <td>{item.Discrption}</td>
                    <td>{item.quotation}</td>
                    <td>{item.finalprice}</td>
                    <td>{item.Advancepaid}</td>
                    <td>{item.remaingamount}</td>
                    <td>{item.Projectduration}</td>
                    <td>
                      {editingIndex === index ? (
                        <div>
                          <Input
                            type="text"
                            value={editedPaidAgain}
                            onChange={(e) => setEditedPaidAgain(e.target.value)}
                          />
                          <DoneIcon
                            color="success"
                            onClick={() => handleSave(index)}
                          />
                          <CloseIcon color="danger" onClick={handleCancel} />
                        </div>
                      ) : (
                        <div>
                          {item.paidagain}
                          <EditIcon
                            sx={{
                              color: "blue",
                              cursor: "pointer",
                              marginLeft: "5px",
                              fontSize: "17px",
                            }}
                            onClick={() => handleEdit(index, item.paidagain)}
                          />
                        </div>
                      )}
                    </td>
                    <td>{item.remark}</td>
                    <td>
                      <ViewProjectData />
                    </td>
                    <td>
                      {" "}
                      <RxCross2
                        style={{
                          color: "red",
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                      />
                      <FaCheck
                        style={{
                          color: "green",
                          fontSize: "20px",
                          paddingLeft: "5px",
                          cursor: "pointer",
                        }}
                      />
                    </td>

                    <td>
                      {/* Display uploaded PDF files */}
                      {pdfFiles.map((file, idx) => (
                        <div key={idx}>
                          <a
                            href={URL.createObjectURL(file)}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {file.name}
                          </a>
                        </div>
                      ))}
                      {/* Input to upload PDF files */}
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handlePdfUpload}
                        multiple
                      />
                    </td>
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
export default ChatAppContain;

import React, { Fragment, useContext, useRef, useState } from "react";
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Input,
  Table,
} from "reactstrap";
import ProjectContext from "../../../../_helper/Project";
import CustomizerContext from "../../../../_helper/Customizer";
import "./Project.css";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../../../../AbstractElements";
import { FaRegCopy, FaSort } from "react-icons/fa";
import { toast } from "react-toastify";

const Project = () => {
  const { layoutURL } = useContext(CustomizerContext);
  const { allData } = useContext(ProjectContext);

  // const [documents, setDocuments] = useState([]);
  const [docName, setDocName] = useState("");
  const [docLink, setDocLink] = useState("");
  const [uploadFile, setUploadFile] = useState("");
  const [remark, setRemark] = useState("");
  const [editingDocument, setEditingDocument] = useState(null);

  const handleCreateDocument = () => {
    const newDocument = {
      id: documents.length + 1,
      date: new Date().toLocaleDateString(),
      docName,
      docLink,
      uploadFile,
      remark,
      createdBySelf: true,
      approvalStatus: "Pending",
    };

    setDocuments([...documents, newDocument]);
    clearInputFields();
  };

  const handleDeleteDocument = (id) => {
    const updatedDocuments = documents.filter((doc) => doc.id !== id);
    setDocuments(updatedDocuments);
  };

  const handleEditDocument = (doc) => {
    setEditingDocument(doc);
    setDocName(doc.docName);
    setDocLink(doc.docLink);
    setUploadFile(doc.uploadFile);
    setRemark(doc.remark);
  };

  const handleUpdateDocument = () => {
    const updatedDocuments = documents.map((doc) =>
      doc.id === editingDocument.id
        ? { ...doc, docName, docLink, uploadFile, remark }
        : doc
    );
    setDocuments(updatedDocuments);
    setEditingDocument(null);
    clearInputFields();
  };

  const clearInputFields = () => {
    setDocName("");
    setDocLink("");
    setUploadFile("");
    setRemark("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadFile(file);
    }
  };

  const handleRemarkChange = (e) => {
    const remarkValue = e.target.value;
    setRemark(remarkValue);
  };

  const [documents, setDocuments] = useState([
    // <-- Change to 'documents'
    {
      sNo: "1",
      date: "20/01/2024",
      documentname: "meta",
      docfile: "helo.jpg",
      doclink: "www.hello",
      remark: "done",
      Approval: "pending",
      EditDelete: (
        <div style={{ display: "flex", gap: "5px" }}>
          <Button color="primary">Edit</Button>
          <Button>Delete</Button>
        </div>
      ),
    },
    {
      sNo: "2",
      date: "25/01/2024",
      documentname: "block",
      docfile: "boy.jpg",
      doclink: "www.erugf",
      remark: "notdone",
      Approval: "reject",
      EditDelete: (
        <div style={{ display: "flex", gap: "5px" }}>
          <Button color="primary">Edit</Button>
          <Button>Delete</Button>
        </div>
      ),
    },

    {
      sNo: "3",
      date: "6/01/2024",
      documentname: "block meta",
      docfile: "boy8978.jpg",
      doclink: "wwmsnaw.erugf",
      remark: "pendinng",
      Approval: "reject",
      EditDelete: (
        <div style={{ display: "flex", gap: "5px" }}>
          <Button color="primary">Edit</Button>
          <Button>Delete</Button>
        </div>
      ),
    },
    {
      sNo: "6",
      date: "6/01/2024",
      documentname: "block meta",
      docfile: "boy8978.jpg",
      doclink: "wwmsnaw.erugf",
      remark: "pendinng",
      Approval: "reject",
      EditDelete: (
        <div style={{ display: "flex", gap: "5px" }}>
          <Button color="primary">Edit</Button>
          <Button>Delete</Button>
        </div>
      ),
    },
    {
      sNo: "6",
      date: "6/01/2024",
      documentname: "block meta",
      docfile: "boy8978.jpg",
      doclink: "wwmsnaw.erugf",
      remark: "done",
      Approval: "reject",
      EditDelete: (
        <div style={{ display: "flex", gap: "5px" }}>
          <Button color="primary">Edit</Button>
          <Button>Delete</Button>
        </div>
      ),
    },
  ]);

  const [documentsother, setDocumentsother] = useState([
    // <-- Change to 'documents'

    {
      sno: "1",
      date: "20/01/2024",
      username: "krishna",
      Userid: "21",
      documentname: "meta",
      docfile: "helo.jpg",
      doclink: "www.hello",
      remark: "done",
    },
    {
      sno: "2",
      date: "23/01/2034",
      username: "hare",
      Userid: "22",
      documentname: "meta",
      docfile: "helo.jpg",
      doclink: "www.hello",
      remark: "pending",
    },
    {
      sno: "3",
      date: "26/01/2043",
      username: "shyam",
      Userid: "23",
      documentname: "meta",
      docfile: "helo.jpg",
      doclink: "www.hello",
      remark: "done",
    },
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

  const copyTabletwo = () => {
    const table = document.getElementById("myTabletwo");

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

  const downloadTableAsCSVtwo = () => {
    const table = document.getElementById("myTabletwo");

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

  const handlePrinttwo = () => {
    window.print();
  };

  const [searchTerm, setSearchTerm] = useState(""); // Step 1
  const [searchTermtwo, setSearchTermtwo] = useState(""); // Step 1

  // ... (unchanged)

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearchChangetwo = (e) => {
    setSearchTermtwo(e.target.value);
  };

  const filtereddocuments = documents.filter((item) => {
    // Step 3
    return (
      item.sNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.documentname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.docfile.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.doclink.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.remark.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Approval.toLowerCase().includes(searchTerm.toLowerCase())
      // item.EditDelete.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const filtereddocumentsother = documentsother.filter((doc) => {
    // Step 3
    return (
      doc.sno.toLowerCase().includes(searchTermtwo.toLowerCase()) ||
      doc.date.toLowerCase().includes(searchTermtwo.toLowerCase()) ||
      doc.username.toLowerCase().includes(searchTermtwo.toLowerCase()) ||
      doc.Userid.toLowerCase().includes(searchTermtwo.toLowerCase()) ||
      doc.documentname.toLowerCase().includes(searchTermtwo.toLowerCase()) ||
      doc.docfile.toLowerCase().includes(searchTermtwo.toLowerCase()) ||
      doc.doclink.toLowerCase().includes(searchTermtwo.toLowerCase()) ||
      doc.remark.toLowerCase().includes(searchTermtwo.toLowerCase())
      // item.EditDelete.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  const [sortOrder, setSortOrder] = useState("asc");
  const handleshort = () => {
    const column = "date";

    const sortedData = [...documents].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (sortOrder[column] === "asc") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });

    setDocuments(sortedData);
    setSortOrder((prevSortOrder) => ({
      ...prevSortOrder,
      date: prevSortOrder.date === "asc" ? "desc" : "asc",
    }));
  };

  const snoshort = () => {
    const column = "sNo";

    const sortedData = [...documents].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (sortOrder[column] === "asc") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });

    setDocuments(sortedData);
    setSortOrder((prevSortOrder) => ({
      ...prevSortOrder,
      sNo: prevSortOrder.sNo === "asc" ? "desc" : "asc",
    }));
  };

  const documentshort = () => {
    const column = "documentname";

    const sortedData = [...documents].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (sortOrder[column] === "asc") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });

    setDocuments(sortedData);
    setSortOrder((prevSortOrder) => ({
      ...prevSortOrder,
      documentname: prevSortOrder.documentname === "asc" ? "desc" : "asc",
    }));
  };

  const docshort = () => {
    const column = "docfile";

    const sortedData = [...documents].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (sortOrder[column] === "asc") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });

    setDocuments(sortedData);
    setSortOrder((prevSortOrder) => ({
      ...prevSortOrder,
      docfile: prevSortOrder.docfile === "asc" ? "desc" : "asc",
    }));
  };

  const doclinks = () => {
    const column = "doclink";

    const sortedData = [...documents].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (sortOrder[column] === "asc") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });

    setDocuments(sortedData);
    setSortOrder((prevSortOrder) => ({
      ...prevSortOrder,
      doclink: prevSortOrder.doclink === "asc" ? "desc" : "asc",
    }));
  };

  const remarkshort = () => {
    const column = "remark";

    const sortedData = [...documents].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (sortOrder[column] === "asc") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });

    setDocuments(sortedData);
    setSortOrder((prevSortOrder) => ({
      ...prevSortOrder,
      remark: prevSortOrder.remark === "asc" ? "desc" : "asc",
    }));
  };

  const approvelshort = () => {
    const column = "Approval";

    const sortedData = [...documents].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (sortOrder[column] === "asc") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });

    setDocuments(sortedData);
    setSortOrder((prevSortOrder) => ({
      ...prevSortOrder,
      Approval: prevSortOrder.Approval === "asc" ? "desc" : "asc",
    }));
  };

  /**----------------------second table fliter------------------------- */

  const snoshortone = () => {
    const column = "sno";

    const sortedData = [...documentsother].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (sortOrder[column] === "asc") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });

    setDocumentsother(sortedData);
    setSortOrder((prevSortOrder) => ({
      ...prevSortOrder,
      sno: prevSortOrder.sno === "asc" ? "desc" : "asc",
    }));
  };

  const handleshortone = () => {
    const column = "date";

    const sortedData = [...documentsother].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (sortOrder[column] === "asc") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });

    setDocumentsother(sortedData);
    setSortOrder((prevSortOrder) => ({
      ...prevSortOrder,
      date: prevSortOrder.date === "asc" ? "desc" : "asc",
    }));
  };
  const documentshortone = () => {
    const column = "username";

    const sortedData = [...documentsother].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (sortOrder[column] === "asc") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });

    setDocumentsother(sortedData);
    setSortOrder((prevSortOrder) => ({
      ...prevSortOrder,
      username: prevSortOrder.username === "asc" ? "desc" : "asc",
    }));
  };

  const docshortone = () => {
    const column = "Userid";

    const sortedData = [...documentsother].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (sortOrder[column] === "asc") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });

    setDocumentsother(sortedData);
    setSortOrder((prevSortOrder) => ({
      ...prevSortOrder,
      Userid: prevSortOrder.Userid === "asc" ? "desc" : "asc",
    }));
  };

  const docnameshoetone = () => {
    const column = "documentname";

    const sortedData = [...documentsother].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (sortOrder[column] === "asc") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });

    setDocumentsother(sortedData);
    setSortOrder((prevSortOrder) => ({
      ...prevSortOrder,
      documentname: prevSortOrder.documentname === "asc" ? "desc" : "asc",
    }));
  };

  const docfileone = () => {
    const column = "docfile";

    const sortedData = [...documentsother].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (sortOrder[column] === "asc") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });

    setDocumentsother(sortedData);
    setSortOrder((prevSortOrder) => ({
      ...prevSortOrder,
      docfile: prevSortOrder.docfile === "asc" ? "desc" : "asc",
    }));
  };

  const doclinkone = () => {
    const column = "doclink";

    const sortedData = [...documentsother].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (sortOrder[column] === "asc") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });

    setDocumentsother(sortedData);
    setSortOrder((prevSortOrder) => ({
      ...prevSortOrder,
      doclink: prevSortOrder.doclink === "asc" ? "desc" : "asc",
    }));
  };

  const remarkone = () => {
    const column = "remark";

    const sortedData = [...documentsother].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (sortOrder[column] === "asc") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });

    setDocumentsother(sortedData);
    setSortOrder((prevSortOrder) => ({
      ...prevSortOrder,
      remark: prevSortOrder.remark === "asc" ? "desc" : "asc",
    }));
  };

  const copyTables = (doclink) => {
    const range = document.createRange();
    const dummyElement = document.createElement("textarea");
    dummyElement.value = doclink;

    document.body.appendChild(dummyElement);
    dummyElement.select();
    document.execCommand("copy");
    document.body.removeChild(dummyElement);

    toast.success("Doc Link copied to clipboard!");
  };

  const copyTablesone = (doclink) => {
    const range = document.createRange();
    const dummyElement = document.createElement("textarea");
    dummyElement.value = doclink;

    document.body.appendChild(dummyElement);
    dummyElement.select();
    document.execCommand("copy");
    document.body.removeChild(dummyElement);

    toast.success("Doc Link copied to clipboard!");
  };

  return (
    <Fragment>
      <Breadcrumbs parent="Document" title="Document" mainTitle="Document" />
      <Container>
        <div style={{ background: "white" }} className="alldocument">
          <h2
            style={{
              color: "#7366FF",
              fontFamily: "arial",
              fontWeight: "bold",
            }}
          >
            Create Document
          </h2>
          <div>
            <div>
              <p>Document Name:</p>
              <Input
                type="text"
                value={docName}
                onChange={(e) => setDocName(e.target.value)}
                placeholder="Enter user id"
              />
            </div>

            <div>
              <p>Document Link:</p>
              <Input
                type="text"
                value={docLink}
                onChange={(e) => setDocLink(e.target.value)}
              />
            </div>

            <div>
              <p>Upload File:</p>
              <Input type="file" accept="image/*" onChange={handleFileChange} />
            </div>

            <div>
              <p>Remark:</p>
              <Input
                onChange={handleRemarkChange}
                type="text"
                value={remark}
                placeholder="Enter remark"
              />
            </div>
          </div>

          {editingDocument ? (
            <Button onClick={handleUpdateDocument}>Update</Button>
          ) : (
            <Button onClick={handleCreateDocument}>Submit</Button>
          )}
        </div>

        <h3
          style={{
            marginTop: "20px",
            color: "#7366FF",
            fontFamily: "arial",
            fontWeight: "bold",
          }}
        >
          Documents Created by Himself
        </h3>

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
          <Table className="documenttable" id="myTable">
            <thead>
              <tr style={{ borderBottom: "1px solid #272727" }}>
                <th onClick={snoshort}>
                  S. No.
                  <FaSort style={{ color: "#BABABA" }} />
                </th>
                <th onClick={handleshort}>
                  Date <FaSort style={{ color: "#BABABA" }} />
                </th>

                <th onClick={documentshort}>
                  Document Name <FaSort style={{ color: "#BABABA" }} />
                </th>
                <th onClick={docshort}>
                  Doc File <FaSort style={{ color: "#BABABA" }} />
                </th>
                <th onClick={doclinks}>
                  Doc Link <FaSort style={{ color: "#BABABA" }} />
                </th>
                <th onClick={remarkshort}>
                  Remark <FaSort style={{ color: "#BABABA" }} />
                </th>
                <th onClick={approvelshort}>
                  Approval <FaSort style={{ color: "#BABABA" }} />
                </th>
                <th>Edit / Delete</th>
              </tr>
            </thead>
            <tbody>
              {filtereddocuments.map((item, index) => (
                <tr key={item.id} style={{ borderBottom: "1px solid #272727" }}>
                  <td>{item.sNo}</td>
                  <td>{item.date}</td>
                  <td>{item.documentname}</td>
                  <td>{item.docfile}</td>
                  <td>
                    {item.doclink}
                    <FaRegCopy
                      style={{ marginLeft: "10px", cursor: "pointer" }}
                      onClick={() => copyTables(item.doclink)}
                    />
                  </td>
                  <td>{item.remark}</td>
                  <td>{item.Approval}</td>
                  <td>{item.EditDelete}</td>
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

        <h3
          style={{
            marginTop: "20px",
            color: "#7366FF",
            fontFamily: "arial",
            fontWeight: "bold",
          }}
        >
          Document Created by Others
        </h3>
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
              value={searchTermtwo}
              onChange={handleSearchChangetwo}
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
          <Table className="documenttable" id="myTabletwo">
            <thead>
              <tr style={{ borderBottom: "1px solid #272727" }}>
                <th onClick={snoshortone}>
                  S. No.
                  <FaSort style={{ color: "#BABABA" }} />
                </th>
                <th onClick={handleshortone}>
                  Date <FaSort style={{ color: "#BABABA" }} />
                </th>
                <th onClick={documentshortone}>
                  user name
                  <FaSort style={{ color: "#BABABA" }} />
                </th>
                <th onClick={docshortone}>
                  User ID
                  <FaSort style={{ color: "#BABABA" }} />
                </th>
                <th onClick={docnameshoetone}>
                  Document name
                  <FaSort style={{ color: "#BABABA" }} />
                </th>
                <th onClick={docfileone}>
                  Doc File
                  <FaSort style={{ color: "#BABABA" }} />
                </th>
                <th onClick={doclinkone}>
                  Doc Link
                  <FaSort style={{ color: "#BABABA" }} />
                </th>
                <th onClick={remarkone}>
                  Remark
                  <FaSort style={{ color: "#BABABA" }} />
                </th>
              </tr>
            </thead>
            <tbody>
              {filtereddocumentsother.map((doc, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #272727" }}>
                  <td>{doc.sno}</td>
                  <td>{doc.date}</td>
                  <td>{doc.username}</td>
                  <td>{doc.Userid}</td>
                  <td>{doc.documentname}</td>
                  <td>{doc.docfile}</td>
                  <td>
                    {doc.doclink}{" "}
                    <FaRegCopy
                      style={{ marginLeft: "10px", cursor: "pointer" }}
                      onClick={() => copyTablesone(doc.doclink)}
                    />{" "}
                  </td>
                  <td>{doc.remark}</td>
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
      </Container>
    </Fragment>
  );
};

export default Project;

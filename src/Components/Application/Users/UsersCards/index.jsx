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
import { FaSort, FaSortUp, FaSortDown, FaCheck } from "react-icons/fa"; // Import the icons
import { Breadcrumbs } from "@mui/material";
import "./income.css";
const UsersCardssContain = () => {
  const [todayTaskFormData, setTodayTaskFormData] = useState({
    date: "",
    MobileNumber: "",
    Image: "",
    UserId: "",
    Email: "",
    Refferalname: "",
  });

  const [todaytaskHistoryData, settodayTaskHistoryData] = useState([
    // Sample data, replace with your actual data
    {
      Sno: "1",
      Name: "mohit",
      date: "2022-01-01",
      MobileNumber: "23426546264",
      Image: "326",
      UserId: "24343",
      Email: "navratan@gmail.com",
      Refferalname: "sdfsfasa",
      Refferalid: "32434",
      Totalprojectamount: "6243762",
      AmountReceived: "35264",
      TotalEarning: "637",
      TotalMember: "23",
      TotalRefferal: "3",
      AffiliateBonus: "798",
      TaskRewardBonus: "500",
      TotalRefundAmount: "231",
      RemainingAmount: "1233",
      TotalWithdrawl: "21321",
      ProjectReferralIncome: "48848",
      LevelIncome: "87887",
      TotalIncome: "878788",
      JoiningDate: "22/01/2024",
      status: "pending",
    },
    {
      Sno: "2",
      Name: "kanha",
      date: "2022-01-02",
      MobileNumber: "2346526444",
      Image: "623",
      UserId: "342",
      Email: "prajapat@gmail.com",
      Refferalname: "dsfsfs",
      Refferalid: "653235",
      Totalprojectamount: " 4763534",
      AmountReceived: "35264",
      TotalEarning: "1242",
      TotalMember: "45",
      TotalRefferal: "5",
      AffiliateBonus: "230",
      TaskRewardBonus: "200",
      TotalRefundAmount: "899",
      RemainingAmount: "900",
      TotalWithdrawl: "5000",
      ProjectReferralIncome: "20000",
      LevelIncome: "9090",
      TotalIncome: "12287",
      JoiningDate: "26/01/2024",
      status: "reject",
    },
    {
      Sno: "3",
      Name: "navratan",
      date: "2022-01-01",
      MobileNumber: "5896757454",
      Image: "2347",
      UserId: "247",
      Email: "mohit@gmail.com",
      Refferalname: "sdfsdf",
      Refferalid: "36424",
      Totalprojectamount: "2313312",
      AmountReceived: "35264",
      TotalEarning: "74673",
      TotalMember: "34",
      TotalRefferal: "2",
      AffiliateBonus: "430",
      TaskRewardBonus: "400",
      TotalRefundAmount: "8349",
      RemainingAmount: "3430",
      TotalWithdrawl: "5466",
      ProjectReferralIncome: "56000",
      LevelIncome: "5660",
      TotalIncome: "16567",
      JoiningDate: "28/01/2024",
      status: "pending",
    },
  ]);

  const [sortOrder, setSortOrder] = useState("asc");
  const [sortOrderone, setSortOrderone] = useState("asc");

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

  //------------------- today task history data-------------------------------------*/

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

  const handlePrintone = () => {
    window.print();
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
  // *----------end----------------//

  const [searchTerm, setSearchTerm] = useState(""); // Step 1

  // ... (unchanged)

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const [searchTermone, setSearchTermone] = useState(""); // Step 1
  const handleSearchChangeone = (e) => {
    setSearchTermone(e.target.value);
  };

  const filteredtodaytaskHistoryData = todaytaskHistoryData.filter((item) => {
    // Step 3
    return (
      item.Sno.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.Name.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.UserId.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.Image.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.MobileNumber.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.Refferalname.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.TotalRefferal.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.TotalMember.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.TotalEarning.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.AmountReceived.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.Totalprojectamount.toLowerCase().includes(
        searchTermone.toLowerCase()
      ) ||
      item.Email.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.JoiningDate.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.date.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.MobileNumber.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.UserId.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.Email.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.Refferalname.toLowerCase().includes(searchTermone.toLowerCase())
    );
  });

  const handleSortone = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (sortOrder === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });

    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortByMobileNumberone = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.MobileNumber.localeCompare(b.MobileNumber);
      } else {
        return b.MobileNumber.localeCompare(a.MobileNumber);
      }
    });
    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortByImageone = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.Image.localeCompare(b.Image);
      } else {
        return b.Image.localeCompare(a.Image);
      }
    });
    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortBySno = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.Sno.localeCompare(b.Sno);
      } else {
        return b.Sno.localeCompare(a.Sno);
      }
    });
    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortByUserIdone = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.UserId.localeCompare(b.UserId);
      } else {
        return b.UserId.localeCompare(a.UserId);
      }
    });
    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortByEmailone = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.Email.localeCompare(b.Email);
      } else {
        return b.Email.localeCompare(a.Email);
      }
    });
    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortByRefferalnameone = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.Refferalname.localeCompare(b.Refferalname);
      } else {
        return b.Refferalname.localeCompare(a.Refferalname);
      }
    });
    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Daily Task" parent="Widgets" title="Daily Task" />
      <Container fluid={true} className="general-widget">
        {/* ... (unchanged) */}

        <Row style={{ marginTop: "20px" }}>
          <Col xl="12">
            <h3
              style={{
                color: "#7366FF",
                fontFamily: "arial",
                fontWeight: "bold",
              }}
            >
              Project Income
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
                  value={searchTermone}
                  onChange={handleSearchChangeone}
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
                  onClick={copyTableone}
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
                  onClick={downloadTableAsCSVone}
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
                  onClick={downloadTableAsCSVone}
                >
                  Excel
                </Button>
                <Button color="primary" onClick={handlePrintone}>
                  Print
                </Button>
              </div>
            </div>
            <div className="dailytasktable dailytasktable-1">
              <Table id="myTable" className="myTable-19">
                <thead>
                  <tr>
                    <th onClick={sortBySno}>
                      S.No.
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortBySno}>
                      Name
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByUserIdone}>
                      User Id
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByImageone}>
                      Image
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByMobileNumberone}>
                      Mobile Number
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>

                    <th onClick={sortByEmailone}>
                      Email ID
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Refferal Name
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Refferal Id
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Project Amount
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Project Amount Received
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Total Earning
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Total Member
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Total Refferal
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Affiliate Bonus
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Task Reward Bonus
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Total Refund Amount
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Remaining Amount
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Total Withdrawl
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Project Referral Income
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Level Income
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Total Income
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Joining Date
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Status
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredtodaytaskHistoryData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.Sno}</td>
                      <td>{item.Name}</td>
                      <td>{item.UserId}</td>
                      <td>{item.Image}</td>
                      <td>{item.MobileNumber}</td>
                      <td>{item.Email}</td>
                      <td>{item.Refferalname}</td>
                      <td>{item.Refferalid}</td>
                      <td>{item.Totalprojectamount}</td>
                      <td>{item.AmountReceived}</td>
                      <td>{item.TotalEarning}</td>
                      <td>{item.TotalMember}</td>
                      <td>{item.TotalRefferal}</td>
                      <td>{item.AffiliateBonus}</td>
                      <td>{item.TaskRewardBonus}</td>
                      <td>{item.TotalRefundAmount}</td>
                      <td>{item.RemainingAmount}</td>
                      <td>{item.TotalWithdrawl}</td>
                      <td>{item.ProjectReferralIncome}</td>
                      <td>{item.LevelIncome}</td>
                      <td>{item.TotalIncome}</td>
                      <td>{item.JoiningDate}</td>
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
      </Container>
    </Fragment>
  );
};

export default UsersCardssContain;

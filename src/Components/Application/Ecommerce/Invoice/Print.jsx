import React, { Fragment, useContext, useRef, useState } from "react";
import { Btn } from "../../../../AbstractElements";
import { Cancel, Print } from "../../../../Constant";
import CartContext from "../../../../_helper/Ecommerce/Cart";
import ProductContext from "../../../../_helper/Ecommerce/Product";
import ItemDescription from "./ItemDescription";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Input,
  Table,
} from "reactstrap";
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";
import CustomizerContext from "../../../../_helper/Customizer";
import { Avatar, Tooltip, Typography } from "@mui/material";
import { FaSort } from "react-icons/fa";
import "./followup.css";
import { MdEdit } from "react-icons/md";
import Followupedit from "./Followupedit";
import ViewButton from "./ViewButton";

const PrintComponent = () => {
  const [Followups, setFollowups] = useState([
    {
      Member: "1",
      Followup: "today",
      LeadType: "b2c",
      Remark: "important",
      AssignedBy: "me",
      Quatation: "2.5lakh",
    },

    {
      Member: "2",
      Followup: "tommorow",
      LeadType: "b2b",
      Remark: "not intersted",
      AssignedBy: "others",
      Quatation: "6.5lakh",
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
  const [sortOrder, setSortOrder] = useState("asc");
  const sortByUserNameone = () => {
    const sortedData = [...Followups].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.Member - b.Member; // Numerical comparison
      } else {
        return b.Member - a.Member; // Numerical comparison
      }
    });
    setFollowups(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <Card className="h-full w-full">
      {/* <AddFollowup
          
        /> */}
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div style={{ display: "flex", gap: "10px" }} className="">
          <div className="w-full md:w-72 followoption">
            <select
              style={{
                border: "1px solid #DEE2E6",
                height: "38px",
                borderRadius: "5px",
              }}
              className="mt-1 block w-full py-2 px-3  bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 "
            >
              <option>Due Today</option>
              <option>Scheduled</option>
              <option>Overdue</option>
              <option>NotInstred</option>
              <option>Converted</option>
              <option>Deal lead</option>
              <option>Wrong Number</option>
              <option>Take From Other Compony</option>
              <option>Important</option>
            </select>
          </div>
          <div className="">
            <Input
              label="Search"
              placeholder="search"
              style={{ marginTop: "5px" }}
            />
          </div>
        </div>
        <div className="tablefollowupbutton">
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
      </CardHeader>

      <div className="" style={{ overflowX: "auto" }}>
        <Table style={{ textAlign: "center" }} id="myTable">
          <thead>
            <tr>
              <th onClick={sortByUserNameone}>
                Member
                <FaSort style={{ color: "#BABABA" }} />
              </th>
              <th onClick={sortByUserNameone}>
                Followup
                <FaSort style={{ color: "#BABABA" }} />
              </th>
              <th onClick={sortByUserNameone}>
                LeadType
                <FaSort style={{ color: "#BABABA" }} />
              </th>
              <th onClick={sortByUserNameone}>
                Remark
                <FaSort style={{ color: "#BABABA" }} />
              </th>
              <th onClick={sortByUserNameone}>
                Assigned By
                <FaSort style={{ color: "#BABABA" }} />
              </th>
              <th onClick={sortByUserNameone}>
                Quatation
                <FaSort style={{ color: "#BABABA" }} />
              </th>
              <th>Edit</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {Followups.map((item, index) => (
              <tr key={index}>
                <td>{item.Member}</td>
                <td>{item.Followup}</td>
                <td>{item.LeadType}</td>
                <td>{item.Remark}</td>
                <td>{item.AssignedBy}</td>
                <td>{item.Quatation}</td>
                <td>
                  <Followupedit />
                </td>
                <td>
                  <ViewButton />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <CardFooter className="flex items-center justify-between ">
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal"
        ></Typography>
        <div style={{ display: "flex", gap: "5px" }} className="flex gap-2">
          <Button color="primary">Previous</Button>
          <Button>Next</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PrintComponent;

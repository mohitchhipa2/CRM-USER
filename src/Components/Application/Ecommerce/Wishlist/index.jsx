import React, { Fragment, useState } from "react";
import { Breadcrumbs } from "../../../../AbstractElements";
import { Button, Container, Input, Table } from "reactstrap";
import AddNewLead from "./AddNewLead";
import "./Lead.css";
import { FaSort } from "react-icons/fa";
import TransferLead from "./TransferLead";
import { MdEdit } from "react-icons/md";
import Leadsedit from "./Leadsedit";
import ViewLeads from "./ViewLeads";
import { None } from "../../../../Constant";
const WishListContain = () => {
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [isAnyCheckboxChecked, setIsAnyCheckboxChecked] = useState(false);

  const [leadsdata, setLeadsData] = useState([
    {
      Status: "pennding",
      comission: "10%",
      formto: "Mohit",
      User: "1",
      Leads: "2",
      Source: "facebook",
      FollowUp: "yes",
      Products: "crm",
      Sellproduct: "crm",
      SellDate: "10/12/2024",
      TakenFromOther: "no",
      Description: "hello",
      Address: "jaipur",
      LeadCreator: "me",
      CreatedAt: "metablock",
      Quatation: "2.5lakh",
    },
    {
      Status: "apporved",
      comission: "9%",
      formto: "vishnu",
      User: "2",
      Leads: "3",
      Source: "linkdin",
      FollowUp: "yes",
      Products: "e-commers",
      Sellproduct: "e-commers",
      SellDate: "10/12/2024",
      TakenFromOther: "no",
      Description: "hello",
      Address: "jaipur",
      LeadCreator: "me",
      CreatedAt: "metablock",
      Quatation: "5.5lakh",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState(""); // Step 1

  // ... (unchanged)

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredleadsdata = leadsdata.filter((item) => {
    // Step 3
    return (
      item.User.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Leads.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Source.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.FollowUp.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Products.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Sellproduct.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.SellDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.TakenFromOther.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.LeadCreator.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.CreatedAt.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  const [selectedRows, setSelectedRows] = useState(
    new Array(filteredleadsdata.length).fill(false)
  );

  const handleCheckboxChange = (e, index) => {
    const updatedSelectedRows = selectedRows.map(() => e.target.checked);
    setSelectedRows(updatedSelectedRows);
    const anyCheckboxChecked = updatedSelectedRows.some((checked) => checked);
    setIsAnyCheckboxChecked(anyCheckboxChecked);
  };

  // const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleSave = (index) => {
    setEditIndex(null);
    // You may want to save the edited data to your state or API here
  };

  const handleInputChange = (event, index, fieldName) => {
    console.log("Index:", index);
    console.log("Edited data:", leadsdata);

    const { value } = event.target;

    const newData = [...leadsdata];
    console.log("New data before update:", newData);

    newData[index] = {
      ...newData[index],
      [fieldName]: value,
    };
    console.log("New data after update:", newData);
    setLeadsData(newData);
  };

  const [sortOrder, setSortOrder] = useState("asc");
  const sortByUserNameone = () => {
    const sortedData = [...leadsdata].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.User - b.User; // Numerical comparison
      } else {
        return b.User - a.User; // Numerical comparison
      }
    });
    setLeadsData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  const [showAllLeads, setShowAllLeads] = useState(true);
  const handleAllLeadsClick = () => {
    setShowAllLeads(true);
  };

  const handleTransferLeadsClick = () => {
    setShowAllLeads(false);
    // Fetch or set data for transferred leads here if needed
  };
  const [selectAllChecked, setSelectAllChecked] = useState(false); // New state variable

  const handleSelectAllCheckboxChange = (e) => {
    const checked = e.target.checked;
    const updatedSelectedRows = filteredleadsdata.map(() => checked);
    setSelectedRows(updatedSelectedRows);
    setIsAnyCheckboxChecked(checked);
    setSelectAllChecked(checked); // Update the state of "Select All" checkbox
  };
  
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Leads" parent="Leads" title="Leads" />
      <Container fluid={true}>
        {/* Start of your existing code */}
        <div className="w-full px-0 md:px-6 py-2">
          <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div className="sm:flex items-center justify-between">
              <h3
                style={{
                  color: "#7366FF",
                  fontFamily: "arial",
                  fontWeight: "bold",
                }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
              >
                Leads
              </h3>
              <div>
                <div className="flex items-start mt-4 sm:mt-0 sm:ml-4">
                  <div className="addleadsbutton">
                    <div style={{ display: "flex", gap: "10px" }}>
                      <Button color="primary" onClick={handleAllLeadsClick}>
                        All Leads
                      </Button>
                      <Button
                        color="primary"
                        onClick={handleTransferLeadsClick}
                      >
                        Transfear Leads
                      </Button>
                    </div>

                    <div>
                      <label className="py-2 px-2 flex items-center justify-center text-xs focus:outline-none upload-button">
                        Upload
                        <input type="file" style={{ display: "none" }} />
                      </label>


                      <Button
                        style={{ width: "100px" }}
                        className="py-2 px-2 flex items-center justify-center text-xs focus:outline-none"
                        onClick={() => setOpen(true)}
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-0 md:px-6 pb-2">
            <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
              <div
                style={{
                  rowGap: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className="flex justify-center md:justify-between items-center flex-wrap mb-4"
              >
                <div className="leadinputdate">
                  <Input
                    type="date"
                    // value={fromDate}
                    // onChange={(e) => setFromDate(e.target.value)}
                    placeholder="From Date"
                    className="leadinputstwo mr-2 px-4 py-2 border border-gray-300 rounded-md text-[#bdbdbd] focus:outline-none focus:ring-[#452a72] focus:border-[#452a72]"
                  />
                  <Input
                    type="date"
                    // value={toDate}
                    // onChange={(e) => setToDate(e.target.value)}
                    placeholder="To Date"
                    className="leadinputstwo px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-[#bdbdbd] focus:ring-[#452a72] focus:border-[#452a72]"
                  />

                  <div>
                    <TransferLead />
                  </div>
                </div>
                <div style={{ display: "flex", gap: "20px" }} className="">
                  <Input
                    onChange={handleSearchChange}
                    style={{ width: "auto" }}
                    type="text"
                    // value={searchQuery}
                    // onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Leads..."
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#452a72] focus:border-[#452a72]"
                  />

                  <Button color="primary" className="leadssearchbtn">
                    Search
                    {/* Button content */}
                  </Button>
                </div>
              </div>

              <div className="dailytasktable" style={{ overflowX: "auto" }}>
                {showAllLeads ? (
                  <Table className="mytables" id="myTable">
                    <thead>
                      <tr>

                        <th checked={selectAllChecked} onClick={handleSelectAllCheckboxChange}>
                          <input type="checkbox" />
                        </th>

                        <th onClick={sortByUserNameone}>
                          User
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          Leads
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          Source
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          FollowUp
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          Products
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          Sell product
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          Sell Date
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          Taken From Other
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          1st Description
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          Address
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          Lead Creator
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          Created At
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
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
                      {filteredleadsdata.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <input
                              type="checkbox"
                              onChange={handleCheckboxChange}
                            />
                          </td>
                          <td>{item.User}</td>
                          <td>{item.Leads}</td>
                          <td>{item.Source}</td>
                          <td>{item.FollowUp}</td>
                          <td>{item.Products}</td>
                          <td>{item.Sellproduct}</td>
                          <td>{item.SellDate}</td>
                          <td>{item.TakenFromOther}</td>
                          <td>{item.Description}</td>
                          <td>{item.Address}</td>
                          <td>{item.LeadCreator}</td>
                          <td>{item.CreatedAt}</td>
                          <td>{item.Quatation}</td>
                          <td>
                            <Leadsedit />
                          </td>
                          <td>
                            <ViewLeads />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                ) : (
                  <Table className="mytables" id="myTable">
                    <thead>
                      <tr>
                        <th>
                          {/* <input type="checkbox" onChange={handleSelectAll} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          Status <FaSort style={{ color: "#BABABA" }} />
                        </th>
                        <th onClick={sortByUserNameone}>
                          Transfear Comission
                          <FaSort style={{ color: "#BABABA" }} />
                        </th>
                        <th onClick={sortByUserNameone}>
                          Transfear Form To
                          <FaSort style={{ color: "#BABABA" }} />
                        </th>
                        <th onClick={sortByUserNameone}>
                          User
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          Leads
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          Source
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          FollowUp
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          Products
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          Sell product
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          Sell Date
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          Taken From Other
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          1st Description
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          Address
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          Lead Creator
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
                        </th>
                        <th onClick={sortByUserNameone}>
                          Created At
                          <FaSort style={{ color: "#BABABA" }} />
                          {/* <FaSort style={{color:"#BABABA"}} /> */}
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
                      {filteredleadsdata.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <input
                              type="checkbox"
                              onChange={handleCheckboxChange}
                            />
                          </td>
                          <td>{item.Status}</td>
                          <td>{item.comission}</td>
                          <td>{item.formto}</td>
                          <td>{item.User}</td>
                          <td>{item.Leads}</td>
                          <td>{item.Source}</td>
                          <td>{item.FollowUp}</td>
                          <td>{item.Products}</td>
                          <td>{item.Sellproduct}</td>
                          <td>{item.SellDate}</td>
                          <td>{item.TakenFromOther}</td>
                          <td>{item.Description}</td>
                          <td>{item.Address}</td>
                          <td>{item.LeadCreator}</td>
                          <td>{item.CreatedAt}</td>
                          <td>{item.Quatation}</td>

                          <td>
                            <Leadsedit />
                          </td>
                          <td>
                            <ViewLeads />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </div>
              <div className="flex justify-center mt-5">
                <div style={{ display: "flex", gap: "10px" }} className="">
                  <p className="text-[#452a72]">Total Pages -</p>

                  <Button className="">Previous</Button>

                  {/* <button style={{border:"1px solid #DEE2E6",width:"100px", borderRadius:"5px"}}>   */}
                  {/* Button content */}
                  {/* </button> */}

                  <Button color="primary" className="">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of your existing code */}
      </Container>
      <AddNewLead open={open} setOpen={setOpen} />
    </Fragment>
  );
};

export default WishListContain;





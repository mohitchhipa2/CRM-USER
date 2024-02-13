import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Input } from "reactstrap";
import { useState } from "react";
import { MdEdit } from "react-icons/md";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Leadsedit(productTypeData, leadSourceData) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [product2, setProduct2] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState("");
  const [important, setImportant] = useState(false);
  const [followupStatus, setFollowupStatus] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [remarks, setRemarks] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [email, setEmail] = useState(""); // Add this line
  const [phoneNo, setPhoneNo] = useState(""); // Add this line
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [leadType, setLeadType] = useState("");
  const [source, setSource] = useState("");
  const [enquiryMessage, setEnquiryMessage] = useState("");
  const [otherValue, setOtherValue] = useState("");
  const [name, setName] = useState("");
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Show input field if "Other" is selected
    setShowInput(selectedValue === "other");
  };
  
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleSourceChange = (e) => {
    setSource(e.target.value);
  };
  const [fields, setFields] = useState([
    { product: "", quotation: "", expanded: false },
  ]);

  const handleAddFields = () => {
    const newFields = [...fields];
    newFields.push({ product: "", quotation: "", expanded: true });
    setFields(newFields);
  };

  const handleFieldChange = (index, key, value) => {
    const newFields = [...fields];
    newFields[index][key] = value;
    setFields(newFields);
  };
  const handleInputChange = (event) => {
    setOtherValue(event.target.value);
  };

  const handleRemoveField = (index) => {
    setFields(prevFields => prevFields.filter((field, i) => i !== index));
  };

  return (
    <React.Fragment>
      <div style={{ cursor: "pointer" }} onClick={handleClickOpen}>
        <MdEdit />
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Edit
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers>
          <div className="mt-2 px-7">
            <h3 className="text-center mb-5 text-3xl text-[#452a72]">
             Edit Your Lead
            </h3>

            <form style={{ padding: "10px 20px" }}>
              <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-2 mt-2 ">
                <div className="leadinput">
                  <div>
                    <Input
                      style={{
                        width: "213px",
                        height: "41px",
                        marginTop: "4px",
                      }}
                      className="leadinputfrist"
                      value={name}
                      required
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ marginBottom: "10px " }}
                    />
                  </div>
                </div>
                <div className="leadinput">
                  <div>
                    <Input
                      type="tel"
                      className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                      value={phoneNo}
                      placeholder="Phone No"
                      onChange={(e) => setPhoneNo(e.target.value)}
                      style={{ marginBottom: "10px " }}
                    />
                  </div>

                  <div>
                    <Input
                      className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                      value={city}
                      placeholder="City"
                      onChange={(e) => setCity(e.target.value)}
                      style={{ marginBottom: "10px " }}
                    />
                  </div>
                </div>
                <div className="leadinput">
                  <div>
                    <Input
                      className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                      value={state}
                      placeholder="State"
                      onChange={(e) => setState(e.target.value)}
                      style={{ marginBottom: "10px " }}
                    />
                  </div>
                  <div>
                    <select
                      style={{ width: "215px", height: "42px" }}
                      className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                      value={selectedCountry}
                      onChange={handleCountryChange}
                    >
                      <option value="">Select a country...</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div
                  style={{
                    gap: "15px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    <select
                      style={{ width: "100%", height: "42px" }}
                      className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                      value={leadType}
                      required
                      onChange={(e) => setLeadType(e.target.value)}
                    >
                      <option value="">Lead type</option>
                      <option>dd</option>
                    </select>
                  </div>
                  <div>
                    <select
                      style={{ width: "100%", height: "42px" }}
                      className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                      value={source}
                      required
                      onChange={handleSourceChange}
                    >
                      <option value="">Select source</option>
                      {leadSourceData &&
                        leadSourceData[0]?.leadSources?.map((cur) => (
                          <option key={cur._id} value={cur.leadSource}>
                            {cur.leadSource}
                          </option>
                        ))}
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                  {/* <div>
                          <select
                            style={{ width: "100%", height: "42px" }}
                            className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                            value={product}
                            required
                            onChange={(e) => setProduct(e.target.value)}
                           
                          >
                        
                            
                            <option value="">Select product</option>
                            {productTypeData &&
                              productTypeData[0]?.productTypes?.map((cur) => (
                                <option key={cur._id} value={cur.productType}>
                                  {cur.productType}
                                </option>
                              ) ) }
                            <option value="">other</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </select>
                         

                        </div> */}
                  {/* <div>
                          <Input
                            className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                            value={quotation}
                            required
                            placeholder="Quotation"
                            onChange={(e) => setQuotation(e.target.value)}
                          />
                        </div> */}
                  <div>
                    {fields.map((field, index) => (
                      <div key={index} style={{ position: "relative" }}>
                        <select
                          style={{
                            width: "100%",
                            height: "42px",
                            marginBottom: "10px",
                          }}
                          className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={field.product}
                          required
                          onChange={(e) =>
                            handleFieldChange(index, "product", e.target.value)
                          }
                        >
                          <option value="">Select product</option>
                          {/* Options */}
                        </select>

                        <Input
                          style={{ marginBottom: "20px" }}
                          className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={field.quotation}
                          required
                          placeholder="Quotation"
                          onChange={(e) =>
                            handleFieldChange(
                              index,
                              "quotation",
                              e.target.value
                            )
                          }
                        />

<Button
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '42px',
              height: '42px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              // background: '#eee',
              background:'#F73164',
color:"white",
              border: '1px solid #ccc',
              borderRadius: '0 4px 4px 0',
              marginTop: '5px',
            }}
            onClick={() => handleRemoveField(index)}
          >
            -
          </Button>

                        {index === fields.length - 1 && (
                          <Button
                            style={{
                              position: "absolute",
                              top: 0,
                              right: 0,
                              width: "42px",
                              height: "42px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              cursor: "pointer",
                              // background: "#eee",
                              background:'#7366FF',
                              color:"white",
                              border: "1px solid #ccc",
                              borderRadius: "0 4px 4px 0",
                              marginTop: "5px",
                            }}
                            onClick={handleAddFields}
                          >
                            +
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid w-full grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-2 mt-2 ">
                <textarea
                  style={{
                    width: "100%",
                    border: "1px solid #DEE2E6",
                    borderRadius: "5px",
                    marginTop: "15px",
                  }}
                  className="resize-none w-full h-[100px] px-2 py-2 text-base outline-none text-slate-600"
                  placeholder="Enq_Message"
                  required
                  value={enquiryMessage}
                  onChange={(e) => setEnquiryMessage(e.target.value)}
                />
              </div>

              <div className="grid w-full grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-2 mt-2">
                <div>
                  <select
                    style={{ width: "100%", height: "42px" }}
                    className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    value={followupStatus}
                    required
                    onChange={(e) => setFollowupStatus(e.target.value)}
                  >
                    <option value="">Select Followup Status</option>
                    <option value="Call Back">Call Back</option>
                    <option value="Not Interested">Not-Interested</option>
                    <option value="Dead Lead">Dead lead</option>
                    <option value="Wrong Number">Wrong Number</option>
                    <option value="Converted">Converted</option>
                    <option value="already taken by other company">
                      already taken by other company
                    </option>
                  </select>
                </div>

                {(followupStatus === "Dead Lead" ||
                  followupStatus === "Wrong Number" ||
                  followupStatus === "Not Interested" ||
                  followupStatus === "New") && (
                  <textarea
                    style={{
                      width: "100%",
                      border: "1px solid #DEE2E6",
                      borderRadius: "5px",
                      marginTop: "15px",
                    }}
                    className="resize-none w-full h-[70px] px-2 py-2 text-base outline-none text-slate-600"
                    placeholder="Remarks"
                    required
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                  />
                )}
              </div>

              {followupStatus === "Call Back" && (
                <>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
                    }}
                    className="grid w-full grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-2 mt-2"
                  >
                    <div>
                      <Input
                        style={{ width: "100%", height: "42px" }}
                        type="date"
                        className="w-full p-2 mt-1 border border-gray-300 text-[#bdbdcc] rounded outline-none focus:bg-gray-50"
                        value={date}
                        required
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>

                    <div>
                      <Input
                        style={{ width: "100%", height: "42px" }}
                        type="time"
                        className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        value={time}
                        required
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </div>
                    <div>
                      <select
                        style={{ width: "100%", height: "42px" }}
                        className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        value={product2}
                        required
                        onChange={(e) => setProduct2(e.target.value)}
                      >
                        <option value="">Select product</option>
                        {productTypeData &&
                          productTypeData[0]?.productTypes?.map((cur) => (
                            <option key={cur._id} value={cur.productType}>
                              {cur.productType}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div>
                      <select
                        style={{ width: "100%", height: "42px" }}
                        className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        value={selectedOption}
                        onChange={handleSelectChange}
                      >
                        <option value="">Me</option>
                        <option value="other">Ajay</option>
                        <option value="other">Meta Block</option>
                      </select>

                      {/* Render input field if "Other" is selected */}
                      {showInput && (
                        <div>
                          <Input
                            type="text"
                            placeholder="Enter commission"
                            value={otherValue}
                            onChange={handleInputChange}
                            style={{
                              width: "100%",
                              height: "42px",
                              marginTop: "15px",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="grid w-full grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-2 mt-2 ">
                    <textarea
                      style={{
                        width: "100%",
                        border: "1px solid #DEE2E6",
                        borderRadius: "5px",
                      }}
                      className="resize-none w-full h-[70px] px-2 py-2 text-base outline-none text-slate-600"
                      placeholder="Remarks"
                      required
                      value={remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                    />

                    <div style={{ display: "flex", gap: "10px" }} className="">
                      <input
                        type="checkbox"
                        // style={{ width: "15px", height: "15px" }}
                        onClick={() => setImportant(true)}
                      />
                      <div className="mr-2">Important</div>
                    </div>
                  </div>
                </>
              )}

              {followupStatus === "Converted" && (
                <>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
                    }}
                    className="grid w-full grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-2 mt-2"
                  >
                    <div>
                      <select
                        style={{ width: "100%", height: "42px" }}
                        className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        value={product2}
                        required
                        onChange={(e) => setProduct2(e.target.value)}
                      >
                        <option value="">Select product</option>
                        {productTypeData &&
                          productTypeData[0]?.productTypes?.map((cur) => (
                            <option key={cur._id} value={cur.productType}>
                              {cur.productType}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div>
                      <Input
                        style={{ width: "100%", height: "42px" }}
                        className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        value={amountPaid}
                        required
                        placeholder="Project Name"
                        onChange={(e) => setAmountPaid(e.target.value)}
                      />
                    </div>
                    <div>
                      <Input
                        style={{ width: "100%", height: "42px" }}
                        type="text"
                        className="w-full p-2 mt-1 border border-gray-300 text-[#bdbdcc] rounded outline-none focus:bg-gray-50"
                        placeholder="Quotatiuon price"
                        required
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                    <div>
                      <Input
                        style={{ width: "100%", height: "42px" }}
                        type="text"
                        required
                        className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="Final Price"
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </div>

                    <div>
                      <Input
                        style={{ width: "100%", height: "42px" }}
                        type="advance PAID"
                        required
                        className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="advance PAID"
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </div>
                    <div>
                      <Input
                        style={{ width: "100%", height: "42px" }}
                        type="date"
                        className="w-full p-2 mt-1 border border-gray-300 text-[#bdbdcc] rounded outline-none focus:bg-gray-50"
                        placeholder="Date"
                        required
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>

                    <div>
                      <Input
                        style={{ width: "100%", height: "42px" }}
                        type="text"
                        required
                        className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        placeholder="project duration"
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid w-full grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-2 mt-2 ">
                    <textarea
                      style={{
                        width: "100%",
                        border: "1px solid #DEE2E6",
                        borderRadius: "5px",
                      }}
                      className="resize-none w-full h-[70px] px-2 py-2 text-base outline-none text-slate-600"
                      required
                      placeholder="Remarks"
                      value={remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                    />
                  </div>
                  <div style={{ display: "flex", gap: "10px" }} className="">
                    <input
                      type="checkbox"
                      // style={{ width: "15px", height: "15px" }}
                      onClick={() => setImportant(true)}
                    />
                    <div className="mr-2">Important</div>
                  </div>
                </>
              )}

              {followupStatus === "already taken by other company" && (
                <>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
                    }}
                    className="grid w-full grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-2 mt-2"
                  >
                    <div>
                      <Input
                        style={{ width: "100%", height: "42px" }}
                        type="date"
                        className="w-full p-2 mt-1 border border-gray-300 text-[#bdbdcc] rounded outline-none focus:bg-gray-50"
                        value={date}
                        required
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid w-full grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-2 mt-2 ">
                    <textarea
                      style={{
                        width: "100%",
                        border: "1px solid #DEE2E6",
                        borderRadius: "5px",
                      }}
                      className="resize-none w-full h-[70px] px-2 py-2 text-base outline-none text-slate-600"
                      placeholder="Why Not Taken"
                      required
                      value={remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                    />

                    <div style={{ display: "flex", gap: "10px" }} className="">
                      <input
                        type="checkbox"
                        // style={{ width: "15px", height: "15px" }}
                        onClick={() => setImportant(true)}
                      />
                      <div className="mr-2">Important</div>
                    </div>
                  </div>
                </>
              )}

              <hr className="h-[1px] bg-gray-100 my-14" />
              <div
                style={{ display: "flex", gap: "20px" }}
                className="flex flex-col items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4 "
              >
                <Button
                  onClick={() => setOpen(false)}
                  className="bg-white border-[#452a72] rounded hover:bg-[#452a72] transform duration-300 ease-in-out text-sm font-medium px-2 py-2 text-[#452a72] hover:text-white border lg:max-w-[95px]  w-full "
                >
                  Back
                </Button>
                <Button
                  color="primary"
                  type="submit"
                  className=" rounded hover:bg-transparent border border-[#452a72] transform duration-300 ease-in-out text-sm font-medium px-2 py-2   lg:max-w-[144px] w-full "
                >
                  Edit
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Edit
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}

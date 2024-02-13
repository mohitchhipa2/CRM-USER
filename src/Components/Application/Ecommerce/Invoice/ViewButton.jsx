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
import { GrView } from "react-icons/gr";
import "./viewbutton.css";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ViewButton(productTypeData) {
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
  const viewdata = [
    {
      name: "Rohit",
      Email: "Rohit@gmail.com",
      Phoneno: "7878787878",
      city: "Jaipur",
      state: "Rajashtan",
      country: "India",
      leadtypeoen: "B2c",
      leadtypetwo: "B2b",
      product: "crm Software",
      source: "Facebook",
      quotation: "2.5lakh",
      enqmessage: "deal done",
      followupStatus: "callBack",
      callBack: {
        date: "12/02/2024",
        time: "12:00 Am",
        Product: "Crm Software",
        transfearlead: "Ajay",
        remark: "done",
        commision: "10%",
      },
      notInterested: {
        Remark: "notinterested",
      },
      deadLead: {
        Remark: "deadleads",
      },
      worngNumber: {
        Remark: "worngNumber",
      },
      converted: {
        product: "crmSoftware",
        projectName: "crm",
        Quotation: "2.5lak",
        finalprice: "5lakh",
        advanvePaid: "50k",
        date: "2/02/2024",
        duration: "6month",
        remark: "already done",
          },
          alreadyTaken: {
              date: "12/02/2024",
              whyNotTaken:"Money"
              
      }
    },
  ];

  return (
    <React.Fragment>
      <div style={{ cursor: "pointer" }} onClick={handleClickOpen}>
        <GrView />
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Data
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

        <DialogContent sx={{ width: "600px" }} dividers>
          <>
            {viewdata.map((item, index) => (
              <div key={index}>
                <div className="viewdatas">
                  <div className="viewinputdatas">
                    <h6>Name : </h6>
                    <span>{item.name}</span>
                  </div>
                  <div className="viewinputdatas">
                    <h6>Email : </h6>
                    <span>{item.Email}</span>
                  </div>
                </div>
                <div className="viewdatas">
                  <div className="viewinputdatas">
                    <h6>Mobile No : </h6>
                    <span>{item.Phoneno}</span>
                  </div>
                  <div className="viewinputdatas">
                    <h6>Country : </h6>
                    <span>{item.country}</span>
                  </div>
                </div>

                <div className="viewdatas">
                  <div className="viewinputdatas">
                    <h6>City : </h6>
                    <span>{item.city}</span>
                  </div>
                  <div className="viewinputdatas">
                    <h6>State : </h6>
                    <span>{item.state}</span>
                  </div>
                </div>
                <div className="viewdatas">
                  <div className="viewinputdatas">
                    <h6>Lead Type : </h6>
                    <span>{item.leadtypeoen}</span>
                  </div>
                  <div className="viewinputdatas">
                    <h6>Lead Source : </h6>
                    <span>{item.source}</span>
                  </div>
                </div>
                <div className="viewdatas">
                  <div className="viewinputdatas">
                    <h6>Product : </h6>
                    <span>{item.product}</span>
                  </div>
                  <div className="viewinputdatas">
                    <h6>Quatation : </h6>
                    <span>{item.quotation}</span>
                  </div>
                </div>
                <div className="viewdatas">
                  <div className="viewinputdatas">
                    <h6>Message : </h6>
                    <span>{item.enqmessage}</span>
                  </div>
                </div>
                {item.followupStatus === "callBack" ? (
                  <div>
                    <h3 style={{ fontFamily: "arial", textAlign: "center" }}>
                      Follow Up Status
                    </h3>
                    <div>
                      <h5>Call Back</h5>
                    </div>

                    <div className="viewdatas">
                      <div className="viewinputdatas">
                        <h6>Date : </h6>
                        <span>{item.callBack.date}</span>
                      </div>
                      <div className="viewinputdatas">
                        <h6>Time : </h6>
                        <span>{item.callBack.time}</span>
                      </div>
                    </div>
                    <div className="viewdatas">
                      <div className="viewinputdatas">
                        <h6>Product : </h6>
                        <span>{item.callBack.Product}</span>
                      </div>
                      <div className="viewinputdatas">
                        <h6>Lead Transfear : </h6>
                        <span>{item.callBack.transfearlead}</span>
                      </div>
                    </div>
                    <div className="viewdatas">
                      <div className="viewinputdatas">
                        <h6>Commision : </h6>
                        <span>{item.callBack.commision}</span>
                      </div>
                      <div className="viewinputdatas">
                        <h6>Remark : </h6>
                        <span>{item.callBack.remark}</span>
                      </div>
                    </div>
                  </div>
                ) : item.followupStatus === "notInterested" ? (
                            <div>
                                <h3 style={{ fontFamily: "arial", textAlign: "center" }}>
                      Follow Up Status
                    </h3>
                    <div>
                      <h5>Not Interested</h5>
                    </div>
                    <div className="viewdatas">
                      <div className="viewinputdatas">
                        <h6>Remark : </h6>
                        <span>{item.notInterested.Remark}</span>
                      </div>
                     
                    </div>
                    
                  </div>
                ) : item.followupStatus === "deadLead" ? (
                                <div>
                                     <h3 style={{ fontFamily: "arial", textAlign: "center" }}>
                      Follow Up Status
                    </h3>
                    <div>
                      <h5> Lead Dead</h5>
                    </div>
                      <div className="viewdatas">
                        <div className="viewinputdatas">
                          <h6>Remark : </h6>
                          <span>{item.deadLead.Remark}</span>
                        </div>
                       
                      </div>
                      
                    </div>
                  ): item.followupStatus === "worngNumber" ? (
                                    <div>
                                         <h3 style={{ fontFamily: "arial", textAlign: "center" }}>
                      Follow Up Status
                    </h3>
                    <div>
                      <h5>Wrong Number</h5>
                    </div>
                      <div className="viewdatas">
                        <div className="viewinputdatas">
                          <h6>Remark : </h6>
                          <span>{item.worngNumber.Remark}</span>
                        </div>
                       
                      </div>
                      
                    </div>): item.followupStatus === "converted" ? (
                                        <div>
                                             <h3 style={{ fontFamily: "arial", textAlign: "center" }}>
                      Follow Up Status
                    </h3>
                    <div>
                      <h5>Converted</h5>
                    </div>
                     <div className="viewdatas">
                  <div className="viewinputdatas">
                    <h6>Product : </h6>
                    <span>{item.converted.product}</span>
                  </div>
                  <div className="viewinputdatas">
                    <h6>Project : </h6>
                    <span>{item.converted.projectName}</span>
                  </div>
                                            </div>
                                            
                                            <div className="viewdatas">
                  <div className="viewinputdatas">
                    <h6>Quatation : </h6>
                    <span>{item.converted.Quotation}</span>
                  </div>
                  <div className="viewinputdatas">
                    <h6>Final Prise : </h6>
                    <span>{item.converted.finalprice}</span>
                  </div>
                                            </div>
                                            <div className="viewdatas">
                                            <div className="viewinputdatas">
                    <h6>Advance Paid : </h6>
                    <span>{item.converted.advanvePaid}</span>
                  </div>
                  <div className="viewinputdatas">
                    <h6>Date : </h6>
                    <span>{item.converted.date}</span>
                  </div>
                                            </div>
                                            <div className="viewdatas">
                                            <div className="viewinputdatas">
                    <h6>Duratation : </h6>
                    <span>{item.converted.duration}</span>
                  </div>
                  <div className="viewinputdatas">
                    <h6>Remark : </h6>
                    <span>{item.converted.remark}</span>
                  </div>
                </div>
                      
                    </div>) : item.followupStatus === "alreadyTaken" ? (
                                            <div>
                                                <h3 style={{ fontFamily: "arial", textAlign: "center" }}>
                      Follow Up Status
                    </h3>
                    <div>
                      <h5>Already Taken</h5>
                    </div>
                      <div className="viewdatas">
                        <div className="viewinputdatas">
                          <h6>Date : </h6>
                          <span>{item.alreadyTaken.date}</span>
                                                    </div>
                                                    <div className="viewinputdatas">
                          <h6>Why Not Take : </h6>
                          <span>{item.alreadyTaken.whyNotTaken}</span>
                        </div>
                       
                      </div>
                      
                    </div>) : null}


                    {item.followupStatus === "callBack" ? (
                  <div>
                    <h3 style={{ fontFamily: "arial", textAlign: "center" }}>
                      Follow Up History
                    </h3>
                    <div>
                      <h5>Call Back</h5>
                    </div>

                    <div className="viewdatas">
                      <div className="viewinputdatas">
                        <h6>Date : </h6>
                        <span>{item.callBack.date}</span>
                      </div>
                      <div className="viewinputdatas">
                        <h6>Time : </h6>
                        <span>{item.callBack.time}</span>
                      </div>
                    </div>
                    <div className="viewdatas">
                      <div className="viewinputdatas">
                        <h6>Product : </h6>
                        <span>{item.callBack.Product}</span>
                      </div>
                      <div className="viewinputdatas">
                        <h6>Lead Transfear : </h6>
                        <span>{item.callBack.transfearlead}</span>
                      </div>
                    </div>
                    <div className="viewdatas">
                      <div className="viewinputdatas">
                        <h6>Commision : </h6>
                        <span>{item.callBack.commision}</span>
                      </div>
                      <div className="viewinputdatas">
                        <h6>Remark : </h6>
                        <span>{item.callBack.remark}</span>
                      </div>
                    </div>
                  </div>
                ) : item.followupStatus === "notInterested" ? (
                            <div>
                                <h3 style={{ fontFamily: "arial", textAlign: "center" }}>
                      Follow Up Status
                    </h3>
                    <div>
                      <h5>Not Interested</h5>
                    </div>
                    <div className="viewdatas">
                      <div className="viewinputdatas">
                        <h6>Remark : </h6>
                        <span>{item.notInterested.Remark}</span>
                      </div>
                     
                    </div>
                    
                  </div>
                ) : item.followupStatus === "deadLead" ? (
                                <div>
                                     <h3 style={{ fontFamily: "arial", textAlign: "center" }}>
                      Follow Up Status
                    </h3>
                    <div>
                      <h5> Lead Dead</h5>
                    </div>
                      <div className="viewdatas">
                        <div className="viewinputdatas">
                          <h6>Remark : </h6>
                          <span>{item.deadLead.Remark}</span>
                        </div>
                       
                      </div>
                      
                    </div>
                  ): item.followupStatus === "worngNumber" ? (
                                    <div>
                                         <h3 style={{ fontFamily: "arial", textAlign: "center" }}>
                      Follow Up Status
                    </h3>
                    <div>
                      <h5>Wrong Number</h5>
                    </div>
                      <div className="viewdatas">
                        <div className="viewinputdatas">
                          <h6>Remark : </h6>
                          <span>{item.worngNumber.Remark}</span>
                        </div>
                       
                      </div>
                      
                    </div>): item.followupStatus === "converted" ? (
                                        <div>
                                             <h3 style={{ fontFamily: "arial", textAlign: "center" }}>
                      Follow Up Status
                    </h3>
                    <div>
                      <h5>Converted</h5>
                    </div>
                     <div className="viewdatas">
                  <div className="viewinputdatas">
                    <h6>Product : </h6>
                    <span>{item.converted.product}</span>
                  </div>
                  <div className="viewinputdatas">
                    <h6>Project : </h6>
                    <span>{item.converted.projectName}</span>
                  </div>
                                            </div>
                                            
                                            <div className="viewdatas">
                  <div className="viewinputdatas">
                    <h6>Quatation : </h6>
                    <span>{item.converted.Quotation}</span>
                  </div>
                  <div className="viewinputdatas">
                    <h6>Final Prise : </h6>
                    <span>{item.converted.finalprice}</span>
                  </div>
                                            </div>
                                            <div className="viewdatas">
                                            <div className="viewinputdatas">
                    <h6>Advance Paid : </h6>
                    <span>{item.converted.advanvePaid}</span>
                  </div>
                  <div className="viewinputdatas">
                    <h6>Date : </h6>
                    <span>{item.converted.date}</span>
                  </div>
                                            </div>
                                            <div className="viewdatas">
                                            <div className="viewinputdatas">
                    <h6>Duratation : </h6>
                    <span>{item.converted.duration}</span>
                  </div>
                  <div className="viewinputdatas">
                    <h6>Remark : </h6>
                    <span>{item.converted.remark}</span>
                  </div>
                </div>
                      
                    </div>) : item.followupStatus === "alreadyTaken" ? (
                                            <div>
                                                <h3 style={{ fontFamily: "arial", textAlign: "center" }}>
                      Follow Up Status
                    </h3>
                    <div>
                      <h5>Already Taken</h5>
                    </div>
                      <div className="viewdatas">
                        <div className="viewinputdatas">
                          <h6>Date : </h6>
                          <span>{item.alreadyTaken.date}</span>
                                                    </div>
                                                    <div className="viewinputdatas">
                          <h6>Why Not Take : </h6>
                          <span>{item.alreadyTaken.whyNotTaken}</span>
                        </div>
                       
                      </div>
                      
                    </div>) : null}

                {/* {item.followupStatus === "callBack" && ( ) } */}
              </div>
            ))}
          </>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Back
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}

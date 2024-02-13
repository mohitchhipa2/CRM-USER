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
import "./viewprojectdata.css";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ViewProjectData(productTypeData) {
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
  const viewdatas = [
    {
      date: "21/04/2024",
      projectname: "E-commers",
      Discrption: "pending",
      Quotation: "2.5lakh",
      finalPrice: "5.5Lakh",
      AdvancePaid: "50k",
      remaingprice: "70k",
      Projecttime: "6month",
          paidagain: "1.5lakh",
          remark:"Delhi"
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
            {viewdatas.map((item, index) => (
              <div key={index}>
                <div className="viewdatas">
                  <div className="viewinputdatas">
                    <h6>Date : </h6>
                    <span>{item.date}</span>
                  </div>
                  <div className="viewinputdatas">
                    <h6>Project Name : </h6>
                    <span>{item.projectname}</span>
                  </div>
                </div>
                <div className="viewdatas">
                  <div className="viewinputdatas">
                    <h6>Discrption : </h6>
                    <span>{item.Discrption}</span>
                  </div>
                  <div className="viewinputdatas">
                    <h6>Quotation price : </h6>
                    <span>{item.Quotation}</span>
                  </div>
                </div>

                <div className="viewdatas">
                  <div className="viewinputdatas">
                    <h6>Final Price : </h6>
                    <span>{item.finalPrice}</span>
                  </div>
                  <div className="viewinputdatas">
                    <h6>Advance Paid : </h6>
                    <span>{item.AdvancePaid}</span>
                  </div>
                </div>
                <div className="viewdatas">
                  <div className="viewinputdatas">
                    <h6>Remaing Price : </h6>
                    <span>{item.remaingprice}</span>
                  </div>
                  <div className="viewinputdatas">
                    <h6>Project Time : </h6>
                    <span>{item.Projecttime}</span>
                  </div>
                </div>
                <div className="viewdatas">
                  <div className="viewinputdatas">
                    <h6>Paid Again : </h6>
                    <span>{item.paidagain}</span>
                  </div>
                  <div className="viewinputdatas">
                    <h6>Remark : </h6>
                    <span>{item.remark}</span>
                  </div>
                </div>
        
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

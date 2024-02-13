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
 

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function TransferLead() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [product2, setProduct2] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState('');
  const [important, setImportant] = useState(false);




  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <React.Fragment>
      <Button style={{background:"#7366FF",color:"white"}} onClick={handleClickOpen}>
        Transfer
      </Button>
      <BootstrapDialog 
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Transfer Lead
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
      
        <DialogContent  dividers>
        <>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "15px",
                          }}
                          className="grid w-full grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-2 mt-2"
            >
                 <select
        style={{ width: "100%", height: "42px" }}
        className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
        value={selectedOption}
       
      >
       
        <option value="">Me</option>
        <option >Ajay</option>
        <option >Meta Block</option>
      </select>
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
                              
                            </select>
                          </div>
                          <div>
   

      {/* Render input field if "Other" is selected */}
      {/* {showInput && ( */}
        <div>
          <Input
            type="text"
            placeholder="Enter commission"
            // value={otherValue}
            // onChange={handleInputChange}
            style={{ width: "100%", height: "42px" , marginTop:"15px" }}
          
          />
        </div>
      {/* )} */}
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
                            // value={remarks}
                            // onChange={(e) => setRemarks(e.target.value)}
                          />

                          <div style={{display:"flex",gap:"10px"}} className="">
                            <input
                              type="checkbox"
                              // style={{ width: "15px", height: "15px" }}
                              onClick={() => setImportant(true)}
                            />
                            <div className="mr-2">Important</div>
                          </div>
                        </div>
                      </>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
        Transfer
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}

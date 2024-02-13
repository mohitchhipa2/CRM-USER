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
// import Copytext from './Copytext';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div onClick={handleClickOpen}>
        <svg  style={{marginBottom:"-15px"}} width={24} height={24} viewBox="0 0 24 24" className="f70z8e">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
        </svg>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <div style={{ display: "flex", gap: "15px" }}>
            <img
              style={{ width: "50px" }}
              src="WhatsApp Image 2024-01-25 at 15.29.59_212f1dfa.jpg"
              alt=""
            />
            <div>
              <h5 className="ksLHF">Share Link</h5>
              <div
                style={{ color: "#5F6368", fontSize: "14px" }}
                className="cYHJbc"
              ></div>
            </div>

            {/* <p style={{fontWeight:"bold", fontSize:"18px"}}>Rahi Bet</p>
            <p >Share this app</p> */}
          </div>
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
        <div className="allsocialmedialink">
          {/* <FaInstagram style={{fontSize:"30px"}} />
          <FaFacebook style={{fontSize:"30px"}}/>
          <FaXTwitter style={{fontSize:"30px"}}/>
          <FaTelegram style={{fontSize:"30px"}}/> */}
<img src="https://th.bing.com/th/id/R.5e04fd779e7607a47d0bad14976caa90?rik=MYieavaZpaXrMw&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f02%2fNew-Instagram-logo.jpg&ehk=kTNHOU7RNhSBC8VTl4FPXOmyjXgyJlrNtPiZ9qk03fA%3d&risl=&pid=ImgRaw&r=0" alt="instagram" />
          <img style={{width:"40px",height:"40px",marginTop:"5px"}} src="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png" alt="facebook" />
          <img style={{width:"40px",height:"40px",marginTop:"5px"}} src="https://freelogopng.com/images/all_img/1690643591twitter-x-logo-png.png" alt="twitter" />
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png" alt="whatsaap" />

        </div>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}

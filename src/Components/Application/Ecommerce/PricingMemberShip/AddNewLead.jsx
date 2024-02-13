import * as React from "react";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";

import NewLeadForm from "./NewLeadForm";
 

export default function AddNewLead({ open, setOpen,opens,setOpens, userData, leadSourceData }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [yourUserData, setYourUserData] = React.useState({});
  React.useEffect(() => {
    console.log("userData in AddNewLead:", userData);
    setYourUserData(userData);
  }, [userData]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="responsive-dialog-title"
        >
          <NewLeadForm open={ open } setOpen={ setOpen } userData={ yourUserData } leadSourceData={ leadSourceData } />
        </Dialog>
      </div>
    </ThemeProvider>
  );
}

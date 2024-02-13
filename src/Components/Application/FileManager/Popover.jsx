import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { useState } from 'react';
import './Popover.css'
import { Input } from 'reactstrap';

export default function PopoverPopupState ()
{const [oldPassword, setOldPassword] = useState('');
const [newPassword, setNewPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();

  if (newPassword === confirmPassword) {
    // Passwords match, you can log the data or perform other actions
    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);
  } else {
    // Passwords don't match, handle accordingly (e.g., show an error message)
    console.error('New password and confirm password do not match');
  }

  // Reset the form after handling the submission
  setOldPassword('');
  setNewPassword('');
  setConfirmPassword('');
};

      
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <div variant="contained" {...bindTrigger(popupState)}>
          Forgot Password
          </div>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'center',
            }} 
          >
                      <Typography sx={ { p: 2 } }>
                      <form onSubmit={handleSubmit}>
      <label htmlFor="oldPassword">Old Password:</label><br />
      <Input
        type="password"
        id="oldPassword"
        name="oldPassword"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        required
      />
      <br />

      <label htmlFor="newPassword">New Password:</label><br />
      <Input
        type="password"
        id="newPassword"
        name="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <br />

      <label htmlFor="confirmPassword">Confirm Password:</label><br />
      <Input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <br />

      <Button style={{ width: "100%" }} variant="contained" color="primary" type="submit">Submit</Button>
    </form>
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
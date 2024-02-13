import React, { useState } from "react";
import "./change.css";
import { Button, Input } from "reactstrap";
const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setMessage("Password changed successfully!");
  };
  return (
    <div className="main-change-password-div">
      <div className="change-password-div">
        <div>
          <h3 style={{ color: "#299AF9" }}>Change Password</h3>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>Old Password:</label>
                <Input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>New Password:</label>
                <Input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>Confirm Password:</label>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div style={{ marginTop: "10px" }}>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;

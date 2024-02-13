import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { PlusSquare, Upload } from "react-feather";
import errorImg from "../../../assets/images/search-not-found.png";
import { toast } from "react-toastify";
import { H4, H6, LI, P, UL, Image } from "../../../AbstractElements";
import { Button, CardBody, CardHeader, Form, Input, Media } from "reactstrap";
import { FileApi } from "../../../api";
import "./ProfileSection.css";
import PopoverPopupState from "./Popover";
import {
  FaFacebook,
  FaInstagram,
  FaShareAlt,
  FaTelegram,
} from "react-icons/fa";
import CustomizedDialogs from "./shares";

import { FaXTwitter } from "react-icons/fa6";

// ... (your existing imports)

const FileContent = () => {
  // ... (existing state and useEffect code)
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [myfile, setMyFile] = useState([]);
  const [showAccountDetails, setShowAccountDetails] = useState(false);

  useEffect(() => {
    axios.get(FileApi).then((response) => {
      setMyFile(response.data);
    });
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const filelist = myfile
    .filter((data) => {
      if (searchTerm == null) {
        return data;
      } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return data;
      }
    })
    .map((data, i) => {
      return (
        <LI attrLI={{ className: "file-box" }} key={i}>
          {/* ... your existing code for file list items */}
        </LI>
      );
    });

  const getFile = () => {
    document.getElementById("upfile").click();
  };

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    console.log("Selected File:", selectedFile);

    if (selectedFile !== null) {
      let myfiles = [...myfile];
      myfiles.push({
        id: myfile.length + 1,
        name: selectedFile.name,
        size: `${selectedFile.size}`,
        modify: `${selectedFile.lastModifiedDate}`,
        icon: "fa fa-file-text-o txt-info",
      });
      setMyFile(myfiles);
      toast.success("File Upload Successfully !");
      setShowAccountDetails(true); // Show Account Details section after file upload
    } else {
      console.error("Please select at least one file!");
      toast.error("Please select at least one file!");
    }
  };

  const handleAccountDetailsSubmit = () => {
    // Handle the submission of account details
    // You can add your logic for processing account details here
    toast.success("Account Details Submitted Successfully !");
  };
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);

  const handleFrontImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setFrontImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleBackImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setBackImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  return (
    <Fragment>
      <div className="allprofilesection">
        {/* ... your existing personal data input fields */}
        <h5
          style={{
            color: "#7366FF",
            textDecoration: "underline",
            fontSize: "25px",
          }}
        >
          Personal Data
        </h5>

        {/* ... (existing personal data input fields) */}
        <div>
          <p>User Id</p>
          <Input placeholder="Enter  user id" />
        </div>
        <div>
          <p>Name</p>
          <Input placeholder="Enter  your name" />
        </div>
        <div>
          <p>Email ID</p>
          <Input placeholder="Enter  your Email ID" />
        </div>
        <div>
          <p>Mobile No</p>
          <Input placeholder="Enter  Mobile No" />
        </div>
        <div>
          <p>Address</p>
          <Input placeholder="Enter  Address" />
        </div>
        <div>
          <p>Joining Date</p>
          <Input type="date" placeholder="Enter joining date" />
        </div>

        <div>
          <p>Refferal ID</p>
          <Input placeholder="Refferal ID" />
        </div>
        <div>
          <p>Referral Name</p>
          <Input placeholder="Referral Name" />
          <img src="" alt="" />
        </div>

        <div>
          <p>Upload Photo</p>
          <Input type="file" accept="image/*" onChange={onFileChange} />
        </div>

        <div
          style={{
            color: "#7366FF",
            textDecoration: "underline",
            fontSize: "25px",
          }}
        >
          <Button onClick={onFileUpload}>Submit</Button>
          {/* <Button color="primary">
            <PopoverPopupState/>
  </Button> */}
        </div>

        <div>
          <h5
            style={{
              color: "#7366FF",
              textDecoration: "underline",
              fontSize: "25px",
            }}
          >
            Account Details
          </h5>
          <div>
            <p>Bank Name*</p>
            <Input placeholder="Enter bank name" />
          </div>
          <div>
            <p>Account Holder Name*</p>
            <Input placeholder="Enter account holder name" />
          </div>
          <div>
            <p>Account No.*</p>
            <Input placeholder="Enter account number" />
          </div>
          <div>
            <p>IFSC Code*</p>
            <Input placeholder="Enter IFSC code" />
          </div>
          <div>
            <p>Enter Upi Id</p>
            <Input type="text" placeholder="enetr your upi id" />
          </div>
          <div>
            <Button>Submit</Button>
          </div>
          <h5
            style={{
              color: "#7366FF",
              textDecoration: "underline",
              fontSize: "25px",
            }}
          >
            KYC Details
          </h5>
          <div>
            <p>Pancard No.*</p>
            <Input placeholder="Enter enter your Pancard No" />
          </div>
          <div>
            <p>Upload Pancard Photo</p>
            <Input type="file" accept="image/*" onChange={onFileChange} />
          </div>
          <div>
            <p>Aadhar Card*</p>
            <Input placeholder="Enter enter your Aadhar Card No" />
          </div>
          <div>
            <p>Upload Aadhar Card Front Side photo</p>
            <Input
              type="file"
              accept="image/*"
              onChange={handleFrontImageChange}
            />
            {frontImage && (
              <img
                src={frontImage}
                alt="Front Side Preview"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
            )}
          </div>
          <div>
            <p>Upload Aadhar Card Back Side photo</p>
            <Input
              type="file"
              accept="image/*"
              onChange={handleBackImageChange}
            />
            {backImage && (
              <img
                src={backImage}
                alt="Back Side Preview"
                style={{ maxWidth: "180px", maxHeight: "180px" }}
              />
            )}
          </div>

          <div>
            <Button onClick={handleAccountDetailsSubmit}>Submit</Button>
          </div>
        </div>
        <div></div>

        <div>
          <h5
            style={{
              color: "#7366FF",
              textDecoration: "underline",
              fontSize: "25px",
            }}
          >
            Social Medial Account
          </h5>
          <div>
            <p>Instagram</p>
            <Input placeholder="Enter your Instagram Link " />
          </div>
          <div>
            <p>Facebook</p>
            <Input placeholder="Enter your Facebook Account Link " />
          </div>
          <div>
            <p>Twitter</p>
            <Input placeholder="Enter Twitter account Link" />
          </div>
          <div>
            <p>Whatsapp</p>
            <Input placeholder="Enter Your Whatsapp Number" />
          </div>

          <div>
            <p>Linkdin</p>
            <Input placeholder="Enter Linkdin account Link" />
          </div>
          <div>
            <p>Telegram</p>
            <Input placeholder="Enter your Telegram Link " />
          </div>
          <div>
            <Button>Submit</Button>
          </div>
        </div>
        <h5
          style={{
            color: "#7366FF",
            textDecoration: "underline",
            fontSize: "25px",
          }}
        >
          Referral Details
        </h5>
        <div className="Referral-container">
          <div className="Referral-Link">https://www.youtube.com/</div>
          <div className="Referral-share">
            <CustomizedDialogs />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FileContent;

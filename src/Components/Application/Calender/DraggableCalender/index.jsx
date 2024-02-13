import { Breadcrumbs } from "../../../../AbstractElements";
import { Dragging_Event } from "../../../../Constant";
import DragCalendar from "./DragCalendar";
import { Button, Card, CardBody, Col, Container, Input, Row } from "reactstrap";
import React, { Fragment } from "react";
import "./Support.css";
import HeaderCard from "../../../Common/Component/HeaderCard";

const DraggableContain = () => {
  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Help And Support"
        parent="Apps"
        title="Help And Support"
      />
      <Container fluid={true} className="calendar-basic">
        <div className="main-support">
          <div className="main-container-support">
            <div className="supprt-left-container">
              <div className="leftimage">
                <img
                  width={"40%"}
                  src="https://www.bizgurukul.com/Biz/img/callback_vector.png"
                  alt=""
                />
              </div>
              <div class="location-txt">
                <h3>Email:</h3>
                <p>Metablock@gmail.com</p>
              </div>
              <div class="location-txt">
                <h3>Whatsapp:</h3>
                <p>+91 7887878778</p>
              </div>
              <div class="location-txt">
                <h3>Registered Address:</h3>
                <p>
                  1305, 13th Floor, Pragati Tower Rajendra Place New Delhi
                  110008
                </p>
              </div>
            </div>

            <div className="supprt-right-container">
              <div className="support-right-header">
                <h3>Request For CallBack</h3>
                <p>
                  To know more about courses offered by us kindly fill in the
                  below mention details you will get a call back soon.
                </p>
              </div>
              <div className="support-input-main-div">
                <div className="support-input-row-1">
                  <Input type="text" placeholder="Name" />
                  <Input type="Email" placeholder="Email Id" />
                </div>
                <div className="support-input-row-2">
                  <Input type="number" placeholder="Mobile No." />
                  <textarea
                    name="Message"
                    placeholder="Message"
                    id=""
                    cols="20"
                    rows="3"
                  ></textarea>
                  <Button className="support-submit-button">Submit</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};
export default DraggableContain;

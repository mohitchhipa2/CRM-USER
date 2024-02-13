import React, { Fragment, useState } from "react";
import { Container } from "reactstrap";
// import { Breadcrumbs } from "../../../AbstractElements";
import "./tranning.css";
const Trannig = () => {
  const videosArr = [
    "https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882",
    "https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf",
    "https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174",
    "https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174",
    "https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78",
    "https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281",
    "https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614",
  ];
  const [videoSrc, setVideoSrc] = useState(videosArr[0]);
  return (
    <Fragment>
      {/* <Breadcrumbs
        mainTitle="Training Modules"
        parent="Apps"
        title="Training Modules"
      /> */}
      <Container fluid={true}>
        <div className="video-container">
          <div className="video-wrapper">
            {/* <video
              controls
              controlsList="nodownload"
              className="video-player"
              src={videoSrc}
            ></video> */}
            <iframe
              className="video-player"
              src="https://www.youtube.com/embed/g5eQgEuiFC8?modestbranding=1"
              data-rel="lightcase"
            >
              <span className="pluse" />
            </iframe>

            <div className="video-info">
              <h1>Sample video 1</h1>
              <p>This is a sample video for testing and demo</p>
            </div>
          </div>
          <div className="video-buttons">
            {videosArr.map((item, index) => (
              <button
                key={index}
                className="lecture-button"
                onClick={() => {
                  setVideoSrc(item);
                }}
              >
                Lecture {index + 1}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default Trannig;

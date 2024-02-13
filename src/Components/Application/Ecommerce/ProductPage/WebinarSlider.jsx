import React from "react";
import Slider from "react-slick";
import "./webinar.css";
function WebinarSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    dots: true,
  };
  const webinardetails = [
    {
      image: "/imagesmeta/one.jpg",
    },
    {
      image: "/imagesmeta/four.jpg",
    },
    {
      image: "/imagesmeta/two.jpg",
    },
    {
      image: "/imagesmeta/three.jpg",
    },
  ];

  return (
    <div className="slider-container">
      <div className="casino-main-box">
        {/* Your other code */}
        <Slider {...settings}>
          {webinardetails.map((item, index) => (
            <div key={index}>
              <div className="item-2">
                <img src={item.image} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default WebinarSlider;

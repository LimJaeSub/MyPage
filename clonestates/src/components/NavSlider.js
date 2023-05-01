import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const SliderWrap = styled.div``;
function NavSlider() {
  const items = [
    <div>
      <h3>Item 1</h3>
    </div>,
    <div>
      <h3>Item 2</h3>
    </div>,
    <div>
      <h3>Item 3</h3>
    </div>,
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SliderWrap>
      <Slider {...settings}>{items}</Slider>
    </SliderWrap>
  );
}

export default NavSlider;

import React from "react";
import styled, { keyframes } from "styled-components";

const SnowMove = keyframes`
  0%{
    opacity:0;
    transform:translate(0,0);
  }
  100%{
    opacity:1;
    transform:translate(0,100vh);
  }
`;
const Snow = styled.div`
  position: absolute;
  visibility: ${(props) => (props.isSnow ? "visible" : "hidden")};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  animation: ${SnowMove} ${(props) => props.delay} linear infinite;
`;

function Snowflake({ top, left, delay, isSnow }) {
  return <Snow top={top} left={left} delay={delay} isSnow={isSnow} />;
}

export default Snowflake;

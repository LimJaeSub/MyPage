import React from "react";
import styled from "styled-components";

const HomeSectionBackground = styled.div`
  width: 70%;
  height: 60vh;
  margin: 0 auto;
  background-color: white;
  opacity: 0.5;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 100px;
`;
const HomeTitle = styled.div`
  font-family: DoHyeon;
  font-size: 100px;
`;

const Homespan = styled.span`
  font-size: 30px;
  font-family: jua;
  display: block;
  text-align: center;
`;

const Minihr = styled.div`
  background-color: #000080;
  width: 200px;
  height: 10px;
`;
function Home() {
  return (
    <HomeSectionBackground>
      <HomeTitle>여기제목임</HomeTitle>
      <Minihr />
      <div>
        <Homespan>여기내용1임</Homespan>
        <Homespan>여기내용2임</Homespan>
      </div>
    </HomeSectionBackground>
  );
}

export default Home;

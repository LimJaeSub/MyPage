import React from "react";
import styled from "styled-components";

const TechboxContainer = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Boxitem = styled.div`
  text-align: center;
  width: 45%;
  height: 80vh;
`;
const BoxitemH2 = styled.h1`
  color: white;
  height: 10%;
  margin: 0;
  line-height: 2.5;
  font-family: DoHyeon;
`;
const Techbox = styled.div`
  background-color: white;
  width: 100%;
  height: 90%;
  opacity: 0.7;
`;
function Skill() {
  return (
    <TechboxContainer>
      <Boxitem>
        <BoxitemH2>Tech Skill</BoxitemH2>
        <Techbox>sdfsdf</Techbox>
      </Boxitem>
      <Boxitem>
        <BoxitemH2>Career</BoxitemH2>
        <Techbox>sdfsdf</Techbox>
      </Boxitem>
    </TechboxContainer>
  );
}

export default Skill;

import React from "react";
import styled from "styled-components";

// Mui
import { Button } from "@mui/material";
import { House } from "@mui/icons-material";

//styled components
const Navlist = styled.div`
  padding: 0;
  text-align: center;
  height: 50%;
`;
const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  height: 24.5%;
  align-items: center;
`;
const PageButton = styled.button`
  border: none;
  border-radius: 50px;
  background-color: rgb(222, 255, 255);
  font-size: 30px;
  font-family: "Jua";
  margin: 0 auto;
  width: 200px;
  height: 80px;
`;

function Nav() {
  return (
    <Navlist>
      <ButtonDiv>
        <PageButton>
          <House />
          Home
        </PageButton>
      </ButtonDiv>
      <ButtonDiv>
        <PageButton>Skill</PageButton>
      </ButtonDiv>
      <ButtonDiv>
        <PageButton>Project</PageButton>
      </ButtonDiv>
      <ButtonDiv>
        <PageButton>방명록</PageButton>
      </ButtonDiv>
    </Navlist>
  );
}

export default Nav;

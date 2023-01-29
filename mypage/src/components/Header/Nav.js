import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// Mui
import { Switch, FormControlLabel } from "@mui/material";
import { House, Build, AccountTree, Notes } from "@mui/icons-material";

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

function Nav({ onToggleSnow }) {
  const navigate = useNavigate();
  return (
    <Navlist>
      <FormControlLabel
        control={<Switch onChange={onToggleSnow} color="default" />}
        label="Snow"
        style={{ color: "white" }}
      />
      <ButtonDiv onClick={() => navigate("/")}>
        <PageButton>
          <House />
          Home
        </PageButton>
      </ButtonDiv>
      <ButtonDiv onClick={() => navigate("/skill")}>
        <PageButton>
          <Build />
          Skill
        </PageButton>
      </ButtonDiv>
      <ButtonDiv onClick={() => navigate("/project")}>
        <PageButton>
          <AccountTree />
          Project
        </PageButton>
      </ButtonDiv>
      <ButtonDiv onClick={() => navigate("/guest")}>
        <PageButton>
          <Notes />
          방명록
        </PageButton>
      </ButtonDiv>
    </Navlist>
  );
}

export default Nav;

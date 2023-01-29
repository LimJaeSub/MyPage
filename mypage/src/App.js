import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Header/Nav";
import Skill from "./components/Skill/Skill";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Snowflake from "./Snowflake";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./components/Project/Project";
import Guest from "./components/Guest/Guest";
// styled components
const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;
const HeaderContainer = styled.div`
  padding: 2% 2% 2% 2%;
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(21, 52, 80);
`;
export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  flex-grow: 1;
  overflow: hidden;
`;

function App() {
  const [isSnow, setIsSnow] = useState(true);
  const array = [
    { key: 1, top: "20px", left: "40px", delay: "10s" },
    { key: 2, top: "30px", left: "200px", delay: "3s" },
    { key: 3, top: "40px", left: "300px", delay: "15s" },
    { key: 4, top: "50px", left: "400px", delay: "9s" },
    { key: 5, top: "60px", left: "500px", delay: "17s" },
    { key: 6, top: "40px", left: "600px", delay: "5s" },
    { key: 7, top: "50px", left: "700px", delay: "13s" },
    { key: 8, top: "60px", left: "800px", delay: "8s" },
    { key: 9, top: "70px", left: "900px", delay: "7s" },
    { key: 10, top: "50px", left: "1000px", delay: "11s" },
    { key: 11, top: "25px", left: "1100px", delay: "6s" },
    { key: 12, top: "35px", left: "1200px", delay: "4s" },
    { key: 13, top: "45px", left: "1300px", delay: "9s" },
  ];

  const onToggleSnow = () => {
    setIsSnow(!isSnow);
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        <AppContainer>
          <HeaderContainer>
            <Header />
            <Nav onToggleSnow={onToggleSnow} />
          </HeaderContainer>
          <MainContainer>
            {array.map((obj) => (
              <Snowflake
                key={obj.key}
                top={obj.top}
                left={obj.left}
                delay={obj.delay}
                isSnow={isSnow}
              />
            ))}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/project" element={<Project />} />
              <Route path="/guest" element={<Guest />} />
            </Routes>
          </MainContainer>
        </AppContainer>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

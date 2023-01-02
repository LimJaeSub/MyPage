import React from "react";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Header/Nav";
import styled from "styled-components";
import Header from "./components/Header/Header";

// styled components
const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;
const HeaderContainer = styled.div`
  padding: 2% 2% 2% 2%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffd495;
`;
const MainContainer = styled.div`
  background-color: #faab78;
  flex-grow: 1;
`;

function App() {
  return (
    <React.Fragment>
      <AppContainer>
        <HeaderContainer>
          <Header />
          <Nav />
        </HeaderContainer>
        <MainContainer>
          <Home />
        </MainContainer>
      </AppContainer>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import styled from "styled-components";
import logoimg from "../../image/linkedin_profile_image.png";
//styled components
const Headerwrap = styled.div`
  height: 30%;
`;
const Logo = styled.div`
  background-image: url(${logoimg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 100px;
`;

function Header() {
  return (
    <Headerwrap>
      <Logo />
    </Headerwrap>
  );
}

export default Header;

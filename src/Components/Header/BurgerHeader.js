import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Burger from "./Burger";
import BurgerMenu from "./BurgerMenu";

const BurgerHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavBar>
        <Logo to="/">LOGO PHOTOGRAPHY</Logo>
      </NavBar>
      <Burger open={open} setOpen={setOpen} />
      <BurgerMenu open={open} setOpen={setOpen} />
    </>
  );
};

const NavBar = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
`;

const Logo = styled(Link)`
  color: #000000;
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.lora};
  display: inline-block;
  text-decoration: none;
  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    color: #ffffff;
    font-size: 20px;
  }
`;

export default BurgerHeader;

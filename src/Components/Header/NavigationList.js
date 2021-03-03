import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavigationList = () => {
  return (
    <Navigation>
      <NavList>
        <NavElem>
          <Link to="/">Home</Link>
        </NavElem>
        <NavElem>
          <Link to="/">About</Link>
        </NavElem>
        <NavElem>
          <Link to="/">Albums</Link>
        </NavElem>
        <NavElem>
          <Link to="/">Blog</Link>
        </NavElem>
        <NavElem>
          <Link to="/">Contact</Link>
        </NavElem>
      </NavList>
    </Navigation>
  );
};

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled(NavLink)`
  color: #ffffff;
  font-size: 15px;
  display: inline-block;
  text-decoration: none;
`;

const NavElem = styled.li`
  display: block;
  text-decoration: none;
  padding: 10px 0px 10px 0px;
  font-size: 13px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.lora};
  margin-right: 35px;
  &:last-child {
    margin-right: 0;
  }
`;

export default NavigationList;

import styled from "styled-components";
import { NavLink } from "react-router-dom";

import StyledBurger from "./Burger.styled";

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};


export default Burger;

import styled from "styled-components";
import { NavLink } from "react-router-dom";

const BurgerMenu = ({ open }) => {
  return (
    <Menu open={open}>
      <Navigation>
        <NavList>
          <NavElem>
            <Link to="/">Home</Link>
          </NavElem>
          <NavElem>
            <Link to="/about">About</Link>
          </NavElem>
          <NavElem>
            <Link to="/albums">Albums</Link>
          </NavElem>
          <NavElem>
            <Link to="/blog">Blog</Link>
          </NavElem>
          <NavElem>
            <Link to="/contact">Contact</Link>
          </NavElem>
        </NavList>
      </Navigation>
    </Menu>
  );
};

const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 100%;
  height: 100vh;
  background: white;
  color: white;
  list-style: none;
  padding-top: 4rem;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  background-color: ${({theme}) => theme.colors.white };
  transition: transform 0.2s;
`;

const Navigation = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: space-evenly; */
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  /* align-items: center; */
`;

const Link = styled(NavLink)`
  color: #000000;
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
  &:not(:last-child) {
    &:after {
      display: block;
      width: 50px;
      height: 1px;
      background-color: #e3e3e3;
      content: "";
      text-align: left;
      margin-top: 4px;
      margin-bottom: 4px;
    }
  }
`;

export default BurgerMenu;

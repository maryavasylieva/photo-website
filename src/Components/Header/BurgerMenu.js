import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

const BurgerMenu = ({ open }) => {
  return (
    <Menu open={open}>
      <Navigation>
        <NavList>
          <NavElem>
            <Link to="/">Home</Link>
          </NavElem>
          <NavElem>
            <Link to="#about">About</Link>
          </NavElem>
          <NavElem>
            <Link to="#albums">Albums</Link>
          </NavElem>
          <NavElem>
            <Link to="/blog">Blog</Link>
          </NavElem>
          <NavElem>
            <Link to="#contact">Contact</Link>
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
  height: 50vh;
  background: white;
  color: white;
  list-style: none;
  padding-top: 4rem;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  background-color: ${({ theme }) => theme.colors.white};
  transition: transform 0.2s;
  &:before {
    display: block;
    min-width: 100%;
    height: 2px;
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
    background-color: #e3e3e3;
    content: "";
    text-align: center;
  }
`;

const Navigation = styled.div`
  display: flex;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

const Link = styled(HashLink)`
  color: #000000;
  font-size: 15px;
  display: inline-block;
  text-decoration: none;
  padding: 13px 0px;
`;

const NavElem = styled.li`
  display: block;
  text-decoration: none;
  font-size: 13px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.lora};
  &:last-child {
    margin-right: 0;
  }
  &:not(:last-child) {
    &:after {
      display: block;
      width: 250px;
      height: 1px;
      background-color: #e3e3e3;
      content: "";
      text-align: center;
    }
  }
`;

export default BurgerMenu;

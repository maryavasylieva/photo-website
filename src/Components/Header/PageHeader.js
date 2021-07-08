import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Media from "react-media";

import BurgerHeader from "./BurgerHeader";

const PageHeader = () => {
  return (
    <Media
      queries={{
        small: "(max-width: 599px)",
        medium: "(min-width: 600px) and (max-width: 1199px)",
        large: "(min-width: 1200px)",
      }}
    >
      {(matches) => (
        <>
          {matches.small && <BurgerHeader />}
          {matches.medium && (
            <NavBar>
              <Logo to="/">LOGO PHOTOGRAPHY</Logo>
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
            </NavBar>
          )}
          {matches.large && (
            <NavBar>
              <Logo to="/">LOGO PHOTOGRAPHY</Logo>
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
            </NavBar>
          )}
        </>
      )}
    </Media>
  );
};

const NavBar = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 1.5em;
`;

const Logo = styled(NavLink)`
  color: #000000;
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.lora};
  display: inline-block;
  text-decoration: none;
  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    color: #bcbcbc;
    font-size: 20px;
  }
`;

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
  color: #bcbcbc;
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

export default PageHeader;

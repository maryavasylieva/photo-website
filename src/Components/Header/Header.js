import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SlideUp, SlideDown } from "animate-components";
import Media from "react-media";

import NavigationList from "./NavigationList";
import styles from "./Header.module.css";
import BurgerMenu from "./BurgerMenu";
import Burger from "./Burger";

// TODO: Set sticky header

const Header = ({ onClick }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <Media
          queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)",
          }}
        >
          {(matches) => (
            <>
              {matches.small && (
                <>
                  <NavBar>
                    <Logo to="/">LOGO PHOTOGRAPHY</Logo>
                  </NavBar>
                  <NavSection className={styles.navSection}>
                    <Text>Welcome to</Text>
                    <TextHead>Pure Photography</TextHead>
                    <Text>
                      We're the biggest, best equipped and most advanced Web
                      Agency in the greater Los Angeles area.
                    </Text>
                    <ButtonWrap>
                      <Button onClick={onClick}>Get Started</Button>
                    </ButtonWrap>
                  </NavSection>

                  <Burger open={open} setOpen={setOpen} />
                  <BurgerMenu open={open} setOpen={setOpen} />
                </>
              )}
              {matches.medium && (
                <>
                  <NavBar>
                    <Logo to="/">LOGO PHOTOGRAPHY</Logo>
                  </NavBar>
                  <NavSection className={styles.navSection}>
                    <Text>Welcome to</Text>
                    <TextHead>Pure Photography</TextHead>
                    <Text>
                      We're the biggest, best equipped and most advanced Web
                      Agency in the greater Los Angeles area.
                    </Text>
                    <ButtonWrap>
                      <Button onClick={onClick}>Get Started</Button>
                    </ButtonWrap>
                  </NavSection>
                  <Burger open={open} setOpen={setOpen} />
                  <BurgerMenu open={open} setOpen={setOpen} />
                </>
              )}
              {matches.large && (
                <div className={styles.navSection}>
                  <SlideDown className="main" as="div" duration="0.7s">
                    <Nav>
                      <Logo to="/">LOGO PHOTOGRAPHY</Logo>
                      <NavigationList />
                    </Nav>
                  </SlideDown>

                  <Wrapper>
                    <SlideUp className="main" as="div" duration="0.7s">
                      <div>
                        <Text>Welcome to</Text>
                        <TextHead>Pure Photography</TextHead>
                        <Text>
                          We're the biggest, best equipped and most advanced Web
                          Agency in the greater Los Angeles area.
                        </Text>
                        <ButtonWrap>
                          <Button onClick={onClick}>Get Started</Button>
                        </ButtonWrap>
                      </div>
                    </SlideUp>
                  </Wrapper>
                </div>
              )}
            </>
          )}
        </Media>
        {/* <div className={styles.navSection}>
        <SlideDown className="main" as="div" duration="0.7s">
          <Nav>
            <Logo to="/">LOGO PHOTOGRAPHY</Logo>
            <NavigationList />
          </Nav>
        </SlideDown>

        <Wrapper>
          <SlideUp className="main" as="div" duration="0.7s">
            <div>
              <Text>Welcome to</Text>
              <TextHead>Pure Photography</TextHead>
              <Text>
                We're the biggest, best equipped and most advanced Web Agency in
                the greater Los Angeles area.
              </Text>
              <ButtonWrap>
                <Button onClick={onClick}>Get Started</Button>
              </ButtonWrap>
            </div>
          </SlideUp>
        </Wrapper>
      </div> */}
      </div>
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

const Nav = styled.div`
  max-width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 120px;
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

const NavSection = styled.div`
  padding-top: 100px;
  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    padding: 0;
  }
`;

const Wrapper = styled.div`
  width: 700px;
  margin: 0 auto;
`;

const ButtonWrap = styled.div`
  text-align: center;
  /* outline: 2px solid red; */
  padding: 28px;
`;

const Button = styled.button`
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 15px 28px;
  font-family: ${({ theme }) => theme.fonts.lora};
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  background: #ffffff;
  text-decoration: none;
  color: #000000;
  cursor: pointer;
`;

const TextHead = styled.h1`
  font-family: ${({ theme }) => theme.fonts.lora};
  text-align: center;
  font-size: 40px;
  color: #ffffff;
  margin: 0;
  margin-bottom: 50px;

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    font-weight: 500;
    font-size: 76px;
  }
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.lora};
  color: #ffffff;
  font-size: 15px;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    font-size: 22px;
    font-weight: 300;
  }
`;

export default Header;

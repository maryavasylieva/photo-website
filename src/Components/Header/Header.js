import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SlideUp, SlideDown } from "animate-components";

import NavigationList from "./NavigationList";
import styles from "./Header.module.css";

const Header = () => {
  return (
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
              We're the biggest, best equipped and most advanced Web Agency in
              the greater Los Angeles area.
            </Text>
            <ButtonWrap>
              <Button to="/gallery">Get started</Button>
            </ButtonWrap>
          </div>
        </SlideUp>
      </Wrapper>
    </div>
  );
};

const Nav = styled.div`
  max-width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  /* outline: 2px solid red; */
  padding-bottom: 120px;
`;

const Logo = styled(Link)`
  color: #ffffff;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.lora};
  display: inline-block;
  text-decoration: none;
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

const Button = styled(Link)`
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
  font-weight: 500;
  font-size: 76px;
  text-align: center;
  color: #ffffff;
  margin: 0;
  margin-bottom: 50px;
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.lora};
  font-weight: 300;
  font-size: 22px;
  color: #ffffff;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
`;

export default Header;

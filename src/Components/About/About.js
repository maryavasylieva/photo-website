import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container>
      <Image
        src="https://images.pexels.com/photos/6869093/pexels-photo-6869093.jpeg?cs=srgb&dl=pexels-kira-schwarz-6869093.jpg&fm=jpg"
        alt="about"
      />
      <WrapDescription>
        <Title>About Us</Title>
        <Text>
          We have been operating for over 30 years and are Members of The
          Federation of Master Builders. We work on projects big and small from
          small residential extensions to full house and commercial builds and
          we are registered NHBC house builders.
        </Text>
        <Text>
          I am text block. Click edit button to change this text. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
          nec ullamcorper mattis, pulvinar dapibus leo.
        </Text>
        <ButtonWrap>
          <Button to="/about">More info</Button>
        </ButtonWrap>
      </WrapDescription>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 90px 70px;
  background: #f8f8f8;
`;

const Image = styled.img`
  width: 500px;
  height: 600px;
`;

const WrapDescription = styled.div`
  width: 500px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.lora};
  font-weight: 400;
`;

const Text = styled.p`
  font-size: 16px;
  color: #606060;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.lora};
  line-height: 30px;
  &:nth-of-type(1) {
    &:after {
      display: block;
      width: 50px;
      height: 1px;
      background-color: #e3e3e3;
      content: "";
      text-align: left;
      margin-top: 40px;
      margin-bottom: 40px;
    }
  }
`;

const ButtonWrap = styled.div`
  text-align: left;
  /* outline: 2px solid red; */
  padding:  30px 0 30px;
`;

const Button = styled(Link)`
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 15px 28px;
  margin-top: 20px;
  font-family: ${({ theme }) => theme.fonts.lora};
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  background: #373a3c;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
`;

export default About;

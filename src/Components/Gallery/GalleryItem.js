import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GalleryItem = ({ src, alt, description, name }) => (
  <Container>
    <WrapperHeadline>
      <Section>
        <Headline>{name}</Headline>

        <BreadcrumbsHolder>
          <Breadcrumb>
            <BackToHome to="/">Home</BackToHome>
          </Breadcrumb>
          <Breadcrumb>{name}</Breadcrumb>
        </BreadcrumbsHolder>
      </Section>
    </WrapperHeadline>

    <Wrapper>
      <ImgWrap>
        <Image src={src} alt={alt} />
      </ImgWrap>
      <WrapDescription>
        <Title>About Project</Title>
        <Text>{description}</Text>
        <Text>
          I am text block. Click edit button to change this text. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
          nec ullamcorper mattis, pulvinar dapibus leo.
        </Text>
      </WrapDescription>
    </Wrapper>
  </Container>
);

const Container = styled.div`
  /* &::after {
    display: block;
    width: 800px;
    height: 1px;
    background-color: #e3e3e3;
    content: "";
    text-align: left;
    margin-top: 40px;
    margin-bottom: 40px;
    margin: 0 auto;
  } */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0 40px 0;
  padding: 0px 20px 0px 20px;
  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    flex-direction: row;
    justify-content: space-around;
    margin: 90px 0 70px 0;
  }
`;

const ImgWrap = styled.div`
  padding: 0px 20px 0px 20px;
  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    padding: 0;
  }
`;

const Image = styled.img`
  height: auto;
  max-width: 100%;
  vertical-align: top;
  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    width: 500px;
    height: 600px;
  }
`;

const WrapDescription = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    width: 500px;
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.lora};
  font-weight: 400;
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    font-size: 32px;
  }
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

const WrapperHeadline = styled.div`
  max-width: 100%;
  height: 145px;
  background: #000000;
  display: flex;
  justify-content: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Headline = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: 400;
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.lora};
  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    font-size: 50px;
  }
`;

const BreadcrumbsHolder = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
`;

const Breadcrumb = styled.li`
  color: #ffffff;
  font-size: 15px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.lora};
  &:nth-of-type(1) {
    &:after {
      content: "/";
      display: inline-block;
      padding-right: 8px;
      padding-left: 10px;
      color: #f8f8f8;
      opacity: 0.3;
    }
  }
`;

const BackToHome = styled(Link)`
  color: #515151;
  font-family: ${({ theme }) => theme.fonts.lora};
  font-size: 15px;
  display: inline-block;
  text-decoration: none;
  &:hover {
    color: #f8f8f8;
    transition: color 0.3s ease-in-out;
  }
`;

export default GalleryItem;

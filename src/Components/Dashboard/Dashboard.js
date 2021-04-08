import React, { useRef } from "react";
import styled from "styled-components";

import Header from "../Header/Header";
import Gallery from "../Gallery/Gallery";
import galleryImages from "../../assets/json/images.json";
import About from "../About/About";

const Dashboard = () => {
  const scrollRef = useRef(null);

  const executeScroll = () => {
    return scrollRef.current.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header onClick={executeScroll} />
      <Section>
        <Headline>Welcome to our website!</Headline>
        <Text>
          Nunc id ante quis tellus faucibus dictum in eget metus. Duis suscipit
          elit sem, sed mattis tellus accumsan eget. Quisque consequat venenatis
          rutrum. Quisque posuere enim augue, in rhoncus diam dictum non. Etiam
          mollis pulvinar nisl.
        </Text>
      </Section>
      <About />
      <Gallery galleryImages={galleryImages} scrollRef={scrollRef} />
    </>
  );
};

const Section = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 70px 75px 70px 40px;
`;

const Headline = styled.h2`
  font-family: ${({ theme }) => theme.fonts.lora};
  font-size: 32px;
  font-weight: 400;
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.lora};
  font-size: 18px;
  line-height: 30px;
  color: #888;
  width: 850px;
  margin: 0 auto;
`;

export default Dashboard;

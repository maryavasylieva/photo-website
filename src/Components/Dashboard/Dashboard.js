import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Media from "react-media";

import Header from "../Header/Header";
import Gallery from "../Gallery/Gallery";
import galleryImages from "../../assets/json/images.json";
import About from "../About/About";
import Footer from "../Footer/Footer";
// import * as api from "../../api/api";

const Dashboard = () => {
  const scrollRef = useRef(null);
  // const [galleryImages, setGalleryImages] = useState([]);

  const executeScroll = () => {
    return scrollRef.current.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  };

  // useEffect(() => {
  //   api
  //     .getPhoto(6)
  //     .then((data) => {
  //       console.log("gallery: ", data.data);
  //       setGalleryImages(data.data);
  //     })
  //     .catch((e) => console.log("Error when get photos: ", e));
  // }, []);

  return (
    <div>
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
      <Footer />
    </div>
  );
};

const Section = styled.div`
  padding: 30px 0px 30px 0px;
  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    padding: 70px 75px 70px 40px;
    margin: 0 auto;
  }
`;

const Headline = styled.h2`
  font-family: ${({ theme }) => theme.fonts.lora};
  font-weight: 400;
  font-size: 1.2rem;
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    font-size: 32px;
  }
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.lora};
  color: #888;
  line-height: 30px;
  text-align: center;
  font-size: 1.1em;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0;
  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    margin: 0 auto;
    width: 850px;
  }
`;

export default Dashboard;

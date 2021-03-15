import React, { useRef } from "react";

import Header from "../Header/Header";
import Gallery from "../Gallery/Gallery";
import galleryImages from "../../assets/image/images.json";
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
      <About />
      <Gallery galleryImages={galleryImages} scrollRef={scrollRef} />
    </>
  );
};

export default Dashboard;

import { useState, useEffect } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
// import Gallery from "react-photo-gallery";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { ReactComponent as Glass } from "../../assets/glass.svg";
import { ReactComponent as LinkChain } from "../../assets/link (1).svg";

import styles from "./AlbumsItem.module.css";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

//TODO: fix lighbox window: fix openLightBox fn;

const AlbumsItem = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  // const [mounted, setMounted] = useState(true);

  // const openLightbox = useCallback((event, { photo, index }) => {
  //   console.log(photo);
  //   console.log(index);
  //   // setCurrentImage(index);
  //   // setViewerIsOpen(true);
  // }, []);

  const openLightBox = () => {
    // setMounted(!mounted);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      {/* <Gallery
          photos={photos}
          onClick={openLightbox}
          // ref={scrollToGalleryRef}
        /> */}

      <Container variants={container} initial="hidden" animate="visible">
        {photos.map((card, index) => (
          <ImageList
            key={index}
            variants={item}
            className={styles.card}
            onClick={openLightBox}
          >
            <Image src={`data:image.jpg;base64,${card.data}`} alt={card.name} />
            {/* <Image src={card.src} alt={card.alt} /> */}

            <div className={styles.iconContainer}>
              <IconList>
                <IconButton>
                  <IconZoom />
                </IconButton>
                <IconButton>
                  <IconLink />
                </IconButton>
              </IconList>
            </div>
          </ImageList>
        ))}
      </Container>

      {viewerIsOpen && (
        <Lightbox
          mainSrc={photos[currentImage].data}
          nextSrc={photos[(currentImage + 1) % photos.length].data}
          prevSrc={
            photos[(currentImage + photos.length - 1) % photos.length].data
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % photos.length)
          }
        />
      )}
    </>
  );
};

const Container = styled(motion.ul)`
  /* overflow: hidden; //TODO: fix side scroll; */
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(6, 200px);
  grid-gap: 1rem;
  grid-auto-flow: dense;
  justify-items: center;
`;

const ImageList = styled(motion.li)`
  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    &:nth-child(4n) {
      grid-column: span 2;
      grid-row: span 2;
    }

    &:nth-child(8n) {
      grid-column: span 3;
      grid-row: span 3;
    }
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const IconList = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index: 2;
`;

const IconButton = styled.button`
  width: 29px;
  height: 38px;
  border-radius: 50%;
  border: transparent;
  background-color: rgba(255, 255, 255, 0.9);
  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    transition: background-color 0.5s ease;
  }
`;
const IconZoom = styled(Glass)`
  width: 20px;
  height: 20px;
`;
const IconLink = styled(LinkChain)`
  width: 23px;
  height: 23px;
`;

const ButtonWrap = styled.div`
  text-align: center;
  /* outline: 2px solid red; */
  padding: 30px 0 30px;
  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    text-align: left;
  }
`;

const Button = styled(Link)`
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 15px 28px;
  /* margin-top: 20px; */
  font-family: ${({ theme }) => theme.fonts.lora};
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  background: #373a3c;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
  /* margin: 0 auto; */
`;

export default AlbumsItem;

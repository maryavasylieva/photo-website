import { useState, useCallback } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
// import Gallery from "react-photo-gallery";
import styled from "styled-components";
import { motion } from "framer-motion";

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

const AlbumsItem = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    console.log(photo);
    console.log(index);
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

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

      <Container
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {photos.map((card) => (
          <motion.li key={card.key} variants={item} className={styles.card}>
            <Image src={card.src} alt={card.alt} />

            <div className={styles.iconContainer}>
              <IconList>
                <IconButton onClick={openLightbox}>
                  <IconZoom />
                </IconButton>
                <IconButton>
                  <IconLink />
                </IconButton>
              </IconList>
            </div>
          </motion.li>
        ))}
      </Container>

      {viewerIsOpen && (
        <Lightbox
          mainSrc={photos[currentImage].src}
          nextSrc={photos[(currentImage + 1) % photos.length].src}
          prevSrc={
            photos[(currentImage + photos.length - 1) % photos.length].src
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
  display: grid;
  overflow: hidden;
  margin: 0;
  list-style-type: none;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-rows: repeat(8, 5vw); */
  grid-gap: 15px;
  padding: 15px;
`;

const Image = styled.img`
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
  background: rgba(255, 255, 255, 0.9);
  &:hover {
    background: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    transition: background 0.5s ease;
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

export default AlbumsItem;

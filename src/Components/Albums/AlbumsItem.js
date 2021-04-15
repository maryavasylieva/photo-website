import { useState, useCallback, useEffect } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Gallery from "react-photo-gallery";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import styles from "../../stylesheet/index.css";

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
        onClick={openLightbox}
      >
        {photos.map((card) => (
          <Card key={card.key} variants={item}>
            <Image src={card.src} alt={card.alt} />
          </Card>
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
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
`;

const Card = styled(motion.li)`


`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default AlbumsItem;

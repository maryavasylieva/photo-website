import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { useState, useCallback } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Gallery from "react-photo-gallery";

import photos from "../../assets/json/floraAlbumPhoto.json";


const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: "100%",
    height: "100vh",
  },
  img: {
    width: 500,
    height: 500,
  },
}));

const Albums = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    console.log(photo);
    console.log(index)
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const classes = useStyles();

  return (
    <>
      {/* <Gallery photos={photos} onClick={openLightbox}/> */}
      <div className={classes.root}>
        <div onClick={openLightbox}>
        <GridList cellHeight={500} className={classes.gridList} cols={3}>
          {photos.map((tile) => (
            <GridListTile key={tile.key} cols={tile.cols || 1}>
              <img src={tile.src} alt={tile.alt} />
            </GridListTile>
          ))}
        </GridList>
        </div>
      </div>
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

export default Albums;

// <div className={classes.root}>
//   <GridList cellHeight={500} className={classes.gridList} cols={3}>
//     {floraImages.map((tile) => (
//       <GridListTile key={tile.key} cols={tile.cols || 1}>
//         <img src={tile.src} alt={tile.alt} />
//       </GridListTile>
//     ))}
//   </GridList>
// </div>

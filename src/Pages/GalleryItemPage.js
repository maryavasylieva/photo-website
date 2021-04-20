import { useState, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

import GalleryItem from "../Components/Gallery/GalleryItem";
import galleryImages from "../assets/json/images.json";
import AlbumsItem from "../Components/Albums/AlbumsItem";
import photos from "../assets/json/floraAlbumPhoto.json";

const GalleryItemPage = () => {
  const [openGallery, setOpenGallery] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  const scrollToGalleryRef = useRef(null);

  // const executeScroll = () => {
  //   return scrollRef.current.scrollIntoView({
  //     block: "center",
  //     behavior: "smooth",
  //   });
  // };

  const getImageObj = (arr, id) => arr.find((el) => el.id === id);
  console.log(history);
  console.log(id);

  const openGalleryGrid = () => {
    setOpenGallery(true);
    // return scrollToGalleryRef.current.scrollIntoView({
    //   block: "center",
    //   behavior: "smooth",
    // });
  };

  return (
    <Container>
      <GalleryItem {...getImageObj(galleryImages, id)} />
      {/* <Button
       type="button"
       onClick={openGalleryGrid}
       >
        View more
      </Button> */}
      <Wrapper>
      <AlbumsItem photos={photos} />
      </Wrapper>

      {/* {openGallery ? (
        <>
          <Button type="button" onClick={() => history.push("/")}>
            Return
          </Button>
        </>
      ) : null} */}
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  /* background: #f8f8f8; */
`;

const Wrapper = styled.div`
   max-width: 1200px;
   margin: 0 auto;
   &:before {
    display: block;
      width: 500px;
      height: 1px;
      background-color: #e3e3e3;
      content: "";
      margin: 0 auto;
      margin-top: 40px;
      margin-bottom: 40px;
   }
`

const Button = styled.button`
  display: block;
  background-color: #373a3c;
  color: #fff;
  width: 140px;
  height: 40px;
  margin: 0 auto;
  border-radius: 5px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  border: none;
  font-family: ${({ theme }) => theme.fonts.lora};
  font-size: 12px;
`;
export default GalleryItemPage;

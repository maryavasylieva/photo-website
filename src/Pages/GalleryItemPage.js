import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import * as api from "../api/api";

import GalleryItem from "../Components/Gallery/GalleryItem";
import galleryImages from "../assets/json/images.json";
import AlbumsItem from "../Components/Albums/AlbumsItem";
// import photos from "../assets/json/floraAlbumPhoto.json";

const GalleryItemPage = () => {
  const { id } = useParams();
  const history = useHistory();

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    api
      .getPhoto(15)
      .then((data) => {
        console.log(data.data);
        setPhotos(data.data);
      })
      .catch((e) => console.log("Error when get photos: ", e));
  }, []);


  const getImageObj = (arr, id) => arr.find((el) => el.id === id);
  console.log(history);
  console.log(id);

  return (
    <Container>
      <GalleryItem {...getImageObj(galleryImages, id)} />
      <Wrapper>
        <AlbumsItem photos={photos} />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  height: 100vh;

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
`;

export default GalleryItemPage;

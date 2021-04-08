import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

import GalleryItem from "../Components/Gallery/GalleryItem";
import galleryImages from "../assets/json/images.json";

const GalleryItemPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const getImageObj = (arr, id) => arr.find((el) => el.id === id);
  console.log(history);
  console.log(id);

  return (
    <Container>
      <GalleryItem {...getImageObj(galleryImages, id)} />
      <Button type="button" onClick={() => history.push("/")}>
        View more
      </Button>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  /* background: #f8f8f8; */
`;

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

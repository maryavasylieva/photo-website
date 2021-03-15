import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

import GalleryItem from "../Components/Gallery/GalleryItem";
import galleryImages from "../assets/image/images.json";

// const getImageObj = (arr, id) => arr.find((el) => el.id === id);

const GalleryPage = () => {
  const history = useHistory();
  // const id = useParams();

  return (
    <Container>
      <GalleryItem galleryImages={galleryImages} />
      <Button type="button" onClick={() => history.push("/")}>
        Return
      </Button>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  background: #f8f8f8;
  /* padding: 90px 70px; */
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
  border: none;
  font-family: ${({ theme }) => theme.fonts.lora};
  font-size: 12px;
`;
export default GalleryPage;

import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

import GalleryItem from "../Components/Gallery/GalleryItem";
import galleryImages from "../assets/image/images.json";

const getImageObj = (arr, id) => arr.find((el) => el.id === id);

const GalleryPage = () => {
  const history = useHistory();
  const id = useParams();

  return (
    <div>
      <Button type="button" onClick={() => history.push("/")}>
        Return
      </Button>
      <GalleryItem {...getImageObj(galleryImages, id)} />
    </div>
  );
};
const Button = styled.button`
  display: block;
  margin-top: 50px;
  background-color: rgb(20, 3, 53);
  color: #fff;
  width: 140px;
  height: 40px;
  text-align: center;
  border: none;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
`;

export default GalleryPage;

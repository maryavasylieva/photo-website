import React from "react";
import styled from "styled-components";

const GalleryItem = ({ src, alt, description }) => (
  <>
    <img src={src} alt={alt} />
    <Text>{description}</Text>
  </>
);

// const Container = styled.div`
//   display: flex;
//   justify-content: space-around;
// `;

// const Image = styled.img`
//   width: 500px;
//   height: 600px;
// `;

const Text = styled.p`
  font-size: 16px;
  color: #606060;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.lora};
  line-height: 30px;
  /* &:nth-of-type(1) {
    &:after {
      display: block;
      width: 50px;
      height: 1px;
      background-color: #e3e3e3;
      content: "";
      text-align: left;
      margin-top: 40px;
      margin-bottom: 40px;
    }
  } */
`;

export default GalleryItem;

import styled, { keyframes } from "styled-components";


export const SpinContainer = styled.div`
  position: relative;
  display: flex;
  margin: auto;
  transform-style: preserve-3d;
  height: 170px;
  width: 120px;
  transform: rotateX(-10deg);
`;

export const Ground = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(90deg);
  background: radial-gradient(center center, farthest-side, #9993, transparent);
`;

export const GalleryImages = styled.img`
  transform-style: preserve-3d;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  line-height: 200px;
  font-size: 50px;
  text-align: center;
  box-shadow: 0 0 8px #fff;
  -webkit-box-reflect: below 10px
    linear-gradient(transparent, transparent, #0005);

  &:hover {
    box-shadow: 0 0 15px #fffd;
    -webkit-box-reflect: below 10px
      linear-gradient(transparent, transparent, #0007);
  }
`;

export const DragContainer = styled.div`
  position: relative;
  display: flex;
  margin: auto;
  transform-style: preserve-3d;
`;

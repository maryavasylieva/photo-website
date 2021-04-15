import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

import {
  SpinContainer,
  Ground,
  GalleryImages,
  DragContainer,
} from "./GalleryImageContainer";

// TODO: 1. remove static props
// TODO: 2. TO INVESTIGATE: set ref on parent component, get all child elemets

// TODO: modal window on click photo

const Gallery = ({ galleryImages, scrollRef }) => {
  const [radius, setRadius] = useState(240);
  const [autoRotate, setAutoRotate] = useState(true);
  const [rotateSpeed, setRotateSpees] = useState(-60);

  useEffect(() => {
    var odrag = document.getElementById("drag-container");
    var ospin = document.getElementById("spin-container");
    var aImg = ospin.getElementsByTagName("img");
    var aVid = ospin.getElementsByTagName("video");
    var aEle = [...aImg, ...aVid]; // combine 2 arrays

    function init(delayTime) {
      for (var i = 0; i < aEle.length; i++) {
        aEle[i].style.transform =
          "rotateY(" +
          i * (360 / aEle.length) +
          "deg) translateZ(" +
          radius +
          "px)";
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay =
          delayTime || (aEle.length - i) / 4 + "s";
      }
    }
    setTimeout(init, 1000);

    function applyTranform(obj) {
      // Constrain the angle of camera (between 0 and 180)
      if (tY > 180) tY = 180;
      if (tY < 0) tY = 0;

      // Apply the angle
      obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
    }

    function playSpin(yes) {
      ospin.style.animationPlayState = yes ? "running" : "paused";
    }

    var desX = 0,
      desY = 0,
      tX = 0,
      tY = 10;

    // auto spin
    if (autoRotate) {
      var animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
      ospin.style.animation = `${animationName} ${Math.abs(
        rotateSpeed
      )}s infinite linear`;
    }

    // setup events
    document.onpointerdown = function (e) {
      clearInterval(odrag.timer);
      e = e || window.event;
      var sX = e.clientX,
        sY = e.clientY;

      this.onpointermove = function (e) {
        e = e || window.event;
        var nX = e.clientX,
          nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTranform(odrag);
        sX = nX;
        sY = nY;
      };

      this.onpointerup = function (e) {
        odrag.timer = setInterval(function () {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTranform(odrag);
          playSpin(false);
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(odrag.timer);
            playSpin(true);
          }
        }, 17);
        this.onpointermove = this.onpointerup = null;
      };

      return false;
    };

    // document.onmousewheel = function (e) {
    //   e = e || window.event;
    //   var d = e.wheelDelta / 20 || -e.detail;
    //   radius += d;
    //   init(1);
    // };
  }, [autoRotate, radius, rotateSpeed]);

  const match = useRouteMatch();
  console.log(match);

  return (
    <Container ref={scrollRef}>
      <HeadlineWrap>
        <Title>Latest Albums</Title>
        <Subtitle>This is a subtitle, feel free to change it!</Subtitle>
      </HeadlineWrap>

      <DragContainer id="drag-container">
        <SpinContainer id="spin-container">
          {galleryImages.map((image) => (
            <Link
              key={image.id}
              // to="/albums/124"
              to={`${match.path}albums/${image.id}`}
            >
              <GalleryImages src={image.src} alt={image.alt} />
            </Link>
          ))}
        </SpinContainer>
        <Ground id="ground" width={radius * 3} height={radius * 3} />
      </DragContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  /* background: #111; */
  flex-direction: column;
  perspective: 1000px;
  transform-style: preserve-3d;
`;

const HeadlineWrap = styled.div`
  text-align: center;
  margin-top: 35px;
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.lora};
  font-size: 30px;
  font-weight: 400;
`;

const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.lora};
  font-size: 17px;
  font-weight: 400;
  color: #888;
  margin-bottom: 0;
`;

// const TextGallery = styled.p`
//   font-family: Serif;
//   position: absolute;
//   top: 100%;
//   left: 50%;
//   transform: translate(-50%, -50%) rotateX(90deg);
//   color: #fff;
// `;

export default Gallery;

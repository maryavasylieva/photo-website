import React, {useRef} from "react";

import styles from "./Gallery.module.css";

const Gallery = () => {

  const refGallery = useRef(null)



  var radius = 240; // how big of the radius
  var autoRotate = true; // auto rotate or not
  var rotateSpeed = -60; // unit: seconds/360 degrees
  var imgWidth = 120; // width of images (unit: px)
  var imgHeight = 170; // height of images (unit: px)

  // Link of background music - set 'null' if you dont want to play background music
  var bgMusicURL =
    "https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a";
  var bgMusicControls = true; // Show UI music control

  /*
   NOTE:
     + imgWidth, imgHeight will work for video
     + if imgWidth, imgHeight too small, play/pause button in <video> will be hidden
     + Music link are taken from: https://hoangtran0410.github.io/Visualyze-design-your-own-/?theme=HauMaster&playlist=1&song=1&background=28
     + Custom from code in tiktok video  https://www.facebook.com/J2TEAM.ManhTuan/videos/1353367338135935/
*/

  // ===================== start =======================
  setTimeout(init, 100);

  var odrag = document.getElementsByClassName("dragContainer");
  var ospin = document.getElementsByClassName("spinContainer");
  var aImg = ospin.getElementsByClassName("galleryImages");
  var aVid = ospin.getElementsByClassName("video");
  var aEle = [...aImg, ...aVid]; // combine 2 arrays

  // Size of images
  ospin.style.width = imgWidth + "px";
  ospin.style.height = imgHeight + "px";

  // Size of ground - depend on radius
  var ground = document.getElementsByClassName("ground");
  ground.style.width = radius * 3 + "px";
  ground.style.height = radius * 3 + "px";

  function init(delayTime) {
    for (var i = 0; i < aEle.length; i++) {
      aEle[i].style.transform =
        "rotateY(" +
        i * (360 / aEle.length) +
        "deg) translateZ(" +
        radius +
        "px)";
      aEle[i].style.transition = "transform 1s";
      aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
    }
  }

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

  var sX,
    sY,
    nX,
    nY,
    desX = 0,
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

  // add background music
  if (bgMusicURL) {
    document.getElementById("music-container").innerHTML += `
<audio src="${bgMusicURL}" ${bgMusicControls ? "controls" : ""} autoplay loop>
<p>If you are reading this, it is because your browser does not support the audio element.</p>
</audio>
`;
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

  document.onmousewheel = function (e) {
    e = e || window.event;
    var d = e.wheelDelta / 20 || -e.detail;
    radius += d;
    init(1);
  };

  return (
    <div className={styles.dragContainer}>
      <div className={styles.spinContainer}>
        <img
          className={styles.galleryImages}
          src="https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <img
          className={styles.galleryImages}
          src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <img
          className={styles.galleryImages}
          src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <img
          className={styles.galleryImages}
          src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <img
          className={styles.galleryImages}
          src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <img
          className={styles.galleryImages}
          src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <a
          target="_blank"
          href="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg"
        >
          <img
            src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </a>

        <video controls autoplay="autoplay" loop className={styles.video}>
          <source
            src="https://player.vimeo.com/external/322244668.sd.mp4?s=338c48ac2dfcb1d4c0689968b5baf94eee6ca0c1&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>

        <p>3D Tiktok Carousel</p>
      </div>
      <div className={styles.ground}></div>
    </div>
  );
};

export default Gallery;

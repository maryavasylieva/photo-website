import React, { lazy } from "react";

const AsyncHomePage = lazy(
  () => import("../Pages/HomePage") /* webpackChunkName: "home-page" */
);

const AsyncGalleryPage = lazy(
  () => import("../Pages/GalleryPage") /* webpackChunkName: "home-page" */
);

export const routes = [
  {
    path: "/",
    exact: true,
    Component: <AsyncHomePage />,
    name: "Home",
  },
  {
    path: "/gallery",
    exact: false,
    Component: <AsyncGalleryPage />,
    name: "Gallery",
  },
];

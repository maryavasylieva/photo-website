import React, { lazy } from "react";

const AsyncHomePage = lazy(
  () => import("../Pages/HomePage") /* webpackChunkName: "home-page" */
);

const AsyncGalleryItemPage = lazy(
  () => import("../Pages/GalleryItemPage") /* webpackChunkName: "gallery-item-page" */
);

export const routes = [
  {
    path: "/",
    exact: true,
    Component: <AsyncHomePage />,
    name: "Home",
  },
  {
    path: "/gallery/:id",
    exact: false,
    Component: <AsyncGalleryItemPage />,
    name: "Gallery",
  },
];

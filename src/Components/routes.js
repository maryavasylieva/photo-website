import React, { lazy } from "react";

const AsyncHomePage = lazy(
  () => import("../Pages/HomePage") /* webpackChunkName: "home-page" */
);

const AsyncGalleryItemPage = lazy(
  () =>
    import(
      "../Pages/GalleryItemPage"
    ) /* webpackChunkName: "gallery-item-page" */
);

const galleryItem = {
  path: "/gallery/:id",
  exact: false,
  Component: <AsyncGalleryItemPage />,
  name: "Gallery",
};

export const routes = [
  galleryItem,
  {
    path: "/",
    exact: true,
    Component: <AsyncHomePage />,
    name: "Home",
  },
];

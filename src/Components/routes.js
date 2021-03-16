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

const AsyncAlbumsPage = lazy(
  () => import("../Pages/AlbumsPage") /* webpackChunkName: "albums-page" */
);

const AsyncBlogPage = lazy(
  () => import("../Pages/BlogPage") /* webpackChunkName: "blog-page" */
);

const AsyncContactPage = lazy(
  () => import("../Pages/ContactPage") /* webpackChunkName: "contact-page" */
);

const AsyncAboutPage = lazy(
  () => import("../Pages/AboutPage") /* webpackChunkName: "about-page" */
);

export const routes = [
  {
    path: "/",
    exact: true,
    Component: <AsyncHomePage />,
    name: "Home",
  },

  {
    path: "/albums",
    exact: true,
    Component: <AsyncAlbumsPage />,
    name: "Albums",
  },

  {
    path: "/albums/:id",
    exact: false,
    Component: <AsyncGalleryItemPage />,
    name: "Albums",
  },

  {
    path: "/blog",
    exact: false,
    Component: <AsyncBlogPage />,
    name: "Blog",
  },

  {
    path: "/about",
    exact: false,
    Component: <AsyncAboutPage />,
    name: "About",
  },

  {
    path: "/contact",
    exact: false,
    Component: <AsyncContactPage />,
    name: "Contact",
  },
];

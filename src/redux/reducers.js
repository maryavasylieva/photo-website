import Action_Types from "./types";
import { combineReducers } from "redux";

const photoGallery = (state = [], { type, payload }) => {
  switch (type) {
    case Action_Types.GET_PHOTO_REQUEST:
      console.log(payload);
      return payload.photoGallery === null ? [] : payload.photoGallery;
    default:
      return state;
  }
};

const error = (state = [], { type, payload }) => {
  switch (type) {
    case Action_Types.GET_PHOTO_ERROR:
      return error;

    default:
      return state;
  }
};

export default combineReducers({ photoGallery, error });

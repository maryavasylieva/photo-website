import Action_Types from "./types";

//GET PHOTO
export const getPhotoRequest = () => ({
  type: Action_Types.GET_PHOTO_REQUEST,
});

export const getPhotoSuccess = (photo) => ({
    type: Action_Types.GET_PHOTO_SUCCESS,
    photo
})

export const getPhotoError = (error) => ({
    type: Action_Types.GET_PHOTO_ERROR,
    error
})

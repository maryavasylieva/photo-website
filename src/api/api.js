import axios from 'axios';

axios.defaults.baseURL = process.env.PHOTO_APP_BASE_URL

export const getPhoto = async (photo) => await axios.get(`api/Photo?top=${photo}`)

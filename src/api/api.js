import axios from "axios";

// axios.defaults.baseURL = process.env.PHOTO_APP_BASE_URL;

export const getPhoto = async (photo) =>
  await axios.get(`https://localhost:5001/api/Photo?top=${photo}`).then(data => data.data);

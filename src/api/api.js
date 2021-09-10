import axios from "axios";

// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getPhoto = async (quantity) =>
  await axios
    .get(`https://localhost:5001/api/Photo?top=${quantity}`)
    // .then((data) => data.data);

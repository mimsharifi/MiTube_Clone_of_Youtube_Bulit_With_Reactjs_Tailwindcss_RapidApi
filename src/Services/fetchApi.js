import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
  maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'f19a187e7amsh29a2e03c0445971p11e43bjsne2a97d90783d',
  // 'X-RapidAPI-Key': process.env.
  // REACT_APP_RAPID_API_KEY,
  'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchApi = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options  )
  return data;
}
import axios from 'axios';

const KEY = 'AIzaSyApcxkHTI2fW7Vk-7DBwIWJCJ0Ch72vi4c';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});

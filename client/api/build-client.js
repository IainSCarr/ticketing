import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: 'http://www.blibbidyblobbily.co.uk/',
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseURL: '/',
    });
  }
};

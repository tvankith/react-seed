import Axios from 'axios';
import { storageEngine } from '../../common/utility';
import { refreshAccessToken } from '../Apis/user/user';

const request = Axios.create();

// Add a request interceptor
request.interceptors.request.use(async (config)=> {
  // Do something before request is sent
  const access_token = storageEngine.get('access_token');
  config.headers = {
    Authorization: `Bearer ${access_token.token}`,
  };
  return config;
});

// Add a response interceptor
request.interceptors.response.use(async (response)=> {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, async (error)=> {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  const originalReq = error.config;
  if (error?.response?.status === 401 && !originalReq._retry && originalReq.url !== "auth/logout") {
    originalReq._retry = true;
    const access_token = await refreshAccessToken();
    originalReq.headers = {
      Authorization: `Bearer ${access_token}`,
    };
    request.defaults.headers = {
      Authorization: `Bearer ${access_token}`,
    };
    return new Promise((resolve, reject) => {
      request
        .request(originalReq)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  }
  return Promise.reject(error);
});
export { request };

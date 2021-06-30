import axios from 'axios';
import parse from 'parse-link-header';

export const connection = axios.create();
const vuex = JSON.parse(localStorage.getItem('FLORA_VUEX'));

if (vuex?.app?.userInfo?.token) {
  connection.defaults.headers.common.Authorization = vuex.app.userInfo.token;
}

connection.defaults.baseURL = ' https://kr-api.spooncast.net';
connection.defaults.headers.common['Content-Type'] = 'application/json';
connection.defaults.responseType = 'json';

connection.interceptors.response.use(
  (response) => {
    const { status, data, headers: { link } } = response;

    switch (status) {
      case 200:
        // Pagination 링크를 파싱해서 값을 리턴해준다.
        return link ? { link: parse(link), data } : data;
      case 201:
        return response;
    }
  },
  (err) => {
    console.log(err);
    console.log(err.response);
    const { data, status } = err.response;

    return Promise.reject({ ...data, status });
  },
);

export default connection;

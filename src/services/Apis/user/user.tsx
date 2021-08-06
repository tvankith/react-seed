// import Axios from 'axios';
import { APP_ENTRYPOINT } from "../../../config/config";
import { request } from "../../request/Request";
import { storageEngine } from "../../../common/utility";
import { ResponseGenerator } from "../../../interface/Response";

function* logout() {
  const response: ResponseGenerator = yield request.post(
    `${APP_ENTRYPOINT}auth/logout`
  );
  return response;
}

export const refreshAccessToken = async () => {
  try {
    const refreshToken = storageEngine.get("refresh_token");

    const getTokenUrl = APP_ENTRYPOINT + "auth/getToken";
    if (refreshToken) {
      const response = await fetch(getTokenUrl, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + refreshToken.token,
          Accept: "application/json, text/plain, */*",
        },
      });
      const { access_token, refresh_token } = await response.json();
      if (access_token && refresh_token) {
        setToken(access_token, refresh_token);
      }
      return access_token.token;
    }
  } catch (error) {
    localStorage.clear();
  }
};


export async function setToken(access_token: any, refresh_token: any) {
  storageEngine.set("access_token", access_token);
  storageEngine.set("refresh_token", refresh_token);
}


const user = {
  logout,
};

export default user;

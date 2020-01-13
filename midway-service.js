import { get } from "axios";
import { authCredentials } from "./auth-service";

const API_HOST = "https://fake-api.com";

const overdraftDetails = async username => {
  const headerInfo = { correlationId: "458639" };

  return get(`${API_HOST}/users/${username}`, {
    ...authCredentials(),
    ...headerInfo
  });
};

export default { overdraftDetails };

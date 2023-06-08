import axios from "axios";

const API_URL = "https://run.mocky.io/v3/e61d67ea-8117-40e7-a639-5c803af9a677";

export const getAll = async () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const response = await axios.get(API_URL, {
    headers: { Authorization: "Bearer " + user.token },
  });
  return response.data;
};

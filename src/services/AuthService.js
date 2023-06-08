import axios from "axios";

const API_URL = "https://run.mocky.io/v3/d0bf85e7-5de5-4103-b647-17a0e4b0e577";

export const login = async (username, password) => {
  const response = await axios.post(API_URL, {
    username,
    password,
  });
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("user");
};

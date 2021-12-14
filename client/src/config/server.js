import axios from "axios";
const instance = axios.create({
  baseURL: "https://h8fp-peduli-lindungi.herokuapp.com",
});

export default instance;

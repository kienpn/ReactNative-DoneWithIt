import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.167.193:9000/api",
});

export default apiClient;

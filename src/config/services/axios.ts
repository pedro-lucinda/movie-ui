import axios from "axios";
import { API_PREFIX, API_URL } from "../../constants";

export const api = axios.create({
  baseURL: `${API_URL}/${API_PREFIX}`,
});

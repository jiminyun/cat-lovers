import axios from "axios";

// Default API will be your root
const API_ROOT = process.env.URL || "http://localhost:3000/";
const TIMEOUT = 20000;
const API_KEY = "b6f0717f-a05a-40be-9c9d-2efb29393842";
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
  common: { "x-api-key": API_KEY }
};

class ApiService {
  constructor({
    baseURL = API_ROOT,
    timeout = TIMEOUT,
    headers = HEADERS,
    auth
  }) {
    const client = axios.create({
      baseURL,
      timeout,
      headers,
      auth
    });

    client.interceptors.response.use(this.handleSuccess, this.handleError);
    this.client = client;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(path) {
    return this.client.get(path).then(response => response.data);
  }

  post(path, payload) {
    return this.client.post(path, payload).then(response => response.data);
  }

  put(path, payload) {
    return this.client.put(path, payload).then(response => response.data);
  }

  patch(path, payload) {
    return this.client.patch(path, payload).then(response => response.data);
  }

  delete(path) {
    return this.client.delete(path).then(response => response.data);
  }
}

export default ApiService;

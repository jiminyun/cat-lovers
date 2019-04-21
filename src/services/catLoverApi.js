import ApiService from "./api";

const BASE_URL = "https://api.thecatapi.com/v1/images/";

const client = new ApiService({ baseURL: BASE_URL });

const catLoverApi = {};

const PAGE_LIMIT = 20;

const API_KEY = "b6f0717f-a05a-40be-9c9d-2efb29393842";

catLoverApi.getCatsByPage = (page = 1) =>
  client.get(
    `search?api_key=${API_KEY}&limit=${PAGE_LIMIT}&page=${page}&order=DESC`
  );

export default catLoverApi;

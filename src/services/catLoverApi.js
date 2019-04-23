import ApiService from "./api";

const BASE_URL = "https://api.thecatapi.com/v1/";

const client = new ApiService({ baseURL: BASE_URL });

const PAGE_LIMIT = 20;

const API_KEY = "b6f0717f-a05a-40be-9c9d-2efb29393842";

export const catLoverApi = {
  getCatsByPage: (page = 1) =>
    client.get(
      `images/search?api_key=${API_KEY}&limit=${PAGE_LIMIT}&page=${page}&order=DESC`
    ),
  getFavorites: () => {
    const query_params = {
      limit: PAGE_LIMIT,
      order: "desc"
    };
    return client.get(`favourites?api_key=${API_KEY}`, {
      params: query_params
    });
  },
  favoriteImage: image_id => {
    const post_body = {
      image_id: image_id,
      sub_id: "User-123"
    };
    return client.post(`favourites?api_key=${API_KEY}`, post_body);
  }
};

export default catLoverApi;

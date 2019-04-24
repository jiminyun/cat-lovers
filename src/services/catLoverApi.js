import ApiService from "./api";

const BASE_URL = "https://api.thecatapi.com/v1/";

const client = new ApiService({ baseURL: BASE_URL });

const PAGE_LIMIT = 20;

const query_params = {
  limit: PAGE_LIMIT,
  order: "desc"
};

export const catLoverApi = {
  getCatsByPage: (page = 1) => {
    return client.get(`images/search?&`, query_params);
  },
  getFavorites: () => {
    return client.get(`favourites?`, {
      params: query_params
    });
  },
  favoriteImage: image_id => {
    const post_body = {
      image_id: image_id,
      sub_id: "User-123"
    };
    return client.post(`favourites`, post_body);
  },
  deleteImage: fav_id => {
    return client.delete(`favourites/${fav_id}`);
  }
};

export default catLoverApi;

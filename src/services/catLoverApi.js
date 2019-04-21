import ApiService from "./Api";

const BASE_URL = "https://api.thecatapi.com/v1/images/";

const client = new ApiService({ baseURL: BASE_URL });

const catLoverApi = {};

const PAGE_LIMIT = 20;

// catLoverApi.getTopStoryIds = () => client.get(`/topstories`);
// catLoverApi.getStory = id => client.get(`/item/${id}${JSON_QUERY}`);
// catLoverApi.getStoriesByPage = (ids, page) => {
//   const { begin, end } = getPageSlice(PAGE_LIMIT, page);
//   const activeIds = getPageValues({ begin, end, items: ids });
//   const storyPromises = activeIds.map(id => catLoverApi.getStory(id));
//   return Promise.all(storyPromises);
//};

catLoverApi.getCatsByPage = (page = 1) =>
  client.get(`/search/limit=${PAGE_LIMIT}&page=${page}&order=DESC`);

export default catLoverApi;

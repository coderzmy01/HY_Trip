import myRequest from "../request/myRequest";
function getHotSuggestsAll() {
  return myRequest.get({ url: "/home/hotSuggests" });
}
export function getCategoriesAll() {
  return myRequest.get({ url: "/home/categories" });
}
export default getHotSuggestsAll;

import myRequest from "../request/myRequest";
function getCityAll() {
  return myRequest.get({ url: "/city/all" });
}
export default getCityAll;

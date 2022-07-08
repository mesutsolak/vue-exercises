import apiService from "./apiService";

let resource = "users";

export default {
  GetByPage(page) {
    return apiService.get(resource, { params: { page } });
  },
  GetById(id) {
    return apiService.get(resource + "/" + id);
  },
  DeleteById(id) {
    return apiService.delete(resource + "/" + id);
  },
};

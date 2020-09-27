import http from "../http-common";


const upload = data => {
  return http.post("/user", data);
}

const getAll = () => {
    return http.get("/user");
};

const remove = id => {
  return http.delete(`/user/${id}`);
};

export default {
    upload,
    getAll,
    remove
  };
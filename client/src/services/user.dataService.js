import http from "../http-common";


const upload = data => {
  return http.post("/user", data);
}

const getAll = () => {
    return http.get("/user");
};



export default {
    upload,
    getAll
  };
import { http } from "./http";

const getAll = () => http.get("tiposEmail")
//const get = id => http.get(`tiposEmail/${id}`)
//const create = data => http.post("tiposEmail", data)
//const update = (id, data) => http.put(`tiposEmail/${id}`, data)
//const remove = id => http.delete(`tiposEmail/${id}`)

export default {
  getAll,
  //get,
  //create,
  //update,
  //remove,
};
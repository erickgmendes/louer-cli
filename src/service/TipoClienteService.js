import { http } from "./http";

const getAll = () => http.get("tiposCliente")
//const get = id => http.get(`tiposCliente/${id}`)
//const create = data => http.post("tiposCliente", data)
//const update = (id, data) => http.put(`tiposCliente/${id}`, data)
//const remove = id => http.delete(`tiposCliente/${id}`)

export default {
  getAll,
  //get,
  //create,
  //update,
  //remove,
};
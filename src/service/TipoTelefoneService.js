import { http } from "./http";

const getAll = () => http.get("tiposTelefone")
//const get = id => http.get(`tiposTelefone/${id}`)
//const create = data => http.post("tiposTelefone", data)
//const update = (id, data) => http.put(`tiposTelefone/${id}`, data)
//const remove = id => http.delete(`tiposTelefone/${id}`)

export default {
  getAll,
  //get,
  //create,
  //update,
  //remove,
};
import { http } from "./http";

const getAll = () => http.get("tiposPessoa")
//const get = id => http.get(`tiposPessoa/${id}`)
//const create = data => http.post("tiposPessoa", data)
//const update = (id, data) => http.put(`tiposPessoa/${id}`, data)
//const remove = id => http.delete(`tiposPessoa/${id}`)

export default {
  getAll,
  //get,
  //create,
  //update,
  //remove,
};
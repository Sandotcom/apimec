import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:5000';
const URL = 'http://localhost:5000';

export const getEjemplos = async () => {
  const { data } = await axios.get(`${URL}/ejemplo`);
  return data;
}

export const getRegistros = async (payload) => {
  const { data } = await axios.post(`${URL}/ejemplo`, payload)
  return data;
}
import axios from 'axios';

const API_URL = 'http://localhost:3002'; // Cambiado a 3002 para evitar EADDRINUSE en 3001


// Obtener todos los gastos
const getAllGastos = async () => {
  const response = await axios.get(`${API_URL}/gastos`);
  return response.data;
};

// Obtener todas las categorías
const getAllCategorias = async () => {
  const response = await axios.get(`${API_URL}/categorias`);
  return response.data;
};

// Agregar un gasto
const createGasto = async (nuevoGasto) => {
  const response = await axios.post(`${API_URL}/gastos`, nuevoGasto);
  return response.data;
};

// Eliminar un gasto
const deleteGasto = async (id) => {
  const response = await axios.delete(`${API_URL}/gastos/${id}`);
  return response.data;
};

export default {
  getAllGastos,
  getAllCategorias,
  createGasto,
  deleteGasto
};


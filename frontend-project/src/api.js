import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Assicurati che questo corrisponda alla tua configurazione backend
});

export default api;
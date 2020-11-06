import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Categories
export const getCategories = () => axios.get(`${API_URL}/categories`);

import axios from 'axios';

export default class ProductService {
  async getProducts() {
    const response = await axios.get('/produtos/');
    return response.data.results;
  }

  async getProductsByCategory(category) {
    const response = await axios.get(`/produtos/?categoria=${category}`);
    return response.data.results;
  }

  async createProduct(product) {
    const response = await axios.post('/produtos/', product);
    return response.data;
  }
}
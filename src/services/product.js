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
  async pushProdutoByCompra(compra) {
      const response = await axios.post('/compras/', compra);
      return response.data; //Precisamos fazer o produto ser uma fk da compra
  }
  
}
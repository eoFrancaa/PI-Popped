import axios from 'axios';

export default class CompraService {
  async getCompras() {
    const response = await axios.get('/compras/');
    return response;
  }
  async getComprasByProduct(){
    const { data } = await axios.get('/compras');
    return data
  }
  async createCompras(){
    const response = await axios.post('/compras/');
    return response.results;
  }
}
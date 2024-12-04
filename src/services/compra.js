import axios from 'axios';

export default class CompraService {
  async getCompras() {
    const response = await axios.get('/compras/');
    return response;
  }
  async getCompratByProduct(){
    const response = await axios.get('/compras/');
    return response;
  }
}
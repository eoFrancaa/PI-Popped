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
  async addToCart(compra){
    await axios.patch(`/compras/${compra.id}`, compra);
  }

  async removeFromCart(id){
    await axios.delete(`/compras/${compra.id}`, compra)
  }
}
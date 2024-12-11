import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useAuthStore } from './auth';

import CompraService from '@/services/compra';
const compraService = new CompraService();

export const useCompraStore = defineStore('compra', () => {
  const authStore = useAuthStore()
  const compras = ref([]);

  async function getCompras() {
    compras.value = await compraService.getCompras();
  } 
  async function getComprasByProduct(product) {
    const data = await compraService.getComprasByProduct(product)
    compras.value = data.results
  }
  async function addToCart(product) {
    await getCompras()
    const compra = compras.value.filter(
      (compra) => compra.usuario == authStore.user.id && compra.status == "Carrinho"
    )[0];
    compra?.itens.push({
      produto: product
    })
    await compraService.addToCart(compra);
    getCompras
  }

  async function deleteCompra(id) {
    await compraService.deleteCompra(id);
    await getCompras();
  }

  return { compras, getCompras, getComprasByProduct, addToCart, deleteCompra };
});
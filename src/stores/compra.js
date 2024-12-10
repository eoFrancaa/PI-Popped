import { ref } from 'vue';
import { defineStore } from 'pinia';

import CompraService from '@/services/compra';
const compraService = new CompraService();

export const useCompraStore = defineStore('compra', () => {
  const compras = ref([]);

  async function getCompras() {
    compras.value = await compraService.getCompras();
  } 
  async function getComprasByProduct(product) {
    const data = await compraService.getComprasByProduct(product)
    compras.value = data.results
  }
  async function createCompras(compras) {
    await compraService.createCompras(compras);
    getCompras
  }

  return { compras, getCompras, getComprasByProduct, createCompras };
});
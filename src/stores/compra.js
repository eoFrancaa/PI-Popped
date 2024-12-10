import { ref } from 'vue';
import { defineStore } from 'pinia';

import CompraService from '@/services/compra';
const compraService = new CompraService();

export const useCompraStore = defineStore('compra', () => {
  const compras = ref([]);

  async function getCompras() {
    compras.value = await compraService.getCompras();
  } 
  async function getCompratByProduct(product) {
    compras.value = await compraService.getCompratByProduct(product)
  }


  return { compras, getCompras, getCompratByProduct };
});
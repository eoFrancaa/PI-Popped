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
  async function addToCart(product){
    try {
    
      if (Array.isArray(compras.value)) {
        const compra = compras.value.find(compra => compra.usuario === product.usuario && compra.status === "Carrinho");
        if (compra) {
          
          compra.itens.push(product);
        } else {
          
          compras.value.push({
            usuario: product.usuario,
            status: "Carrinho",
            itens: [product]
          });
        }
      } else {
        console.error('compras.value não é um array:', compras.value);
        compras.value = [{ 
          usuario: product.usuario,
          status: "Carrinho",
          itens: [product]
        }];
      }
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
    }
  };

  async function removeFromCart(id) {
    
  }

  return { compras, getCompras, getComprasByProduct, addToCart, removeFromCart };
});
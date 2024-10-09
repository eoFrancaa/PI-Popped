import { ref } from 'vue';
import { defineStore } from 'pinia';

import ProductService from '@/services/product';
const productService = new ProductService();

export const useProductStore = defineStore('product', () => {
  const products = ref([]);

  async function getProducts() {
    products.value = await productService.getProducts();
  }

  async function getProductsByCategory(category) {
    products.value = await productService.getProductsByCategory(category);
  }

  async function createProduct(product) {
    await productService.createProduct(product);
    getProducts();
  }

  return { products, createProduct, getProducts, getProductsByCategory };
});
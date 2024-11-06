<script setup>
import { onMounted, ref } from 'vue';
import { useProductStore } from '@/stores/product'
import { watch } from 'vue';
import 'vue-snap/dist/vue-snap.css';

const props = defineProps(['category'])

const productStore = useProductStore()
const categoryName = ref('')

const products = ref([])

watch(() => props.category, (newCategory, oldCategory) => {
    products.value = productStore.getProductsByCategory(newCategory)  
});

onMounted(() => {
    products.value = productStore.getProductsByCategory(props.category)
});

const addToCart = (product) => {
  product.push(product);
};
</script>


<template>
    <div>
    <div class="clouth-title">
      <h2>{{categoryName}}</h2>
    </div>
    <carousel>
      <div v-for="product in productStore.products" :key="product.id" class="clouth">
      <slide>
            <div class="card">
              <img :src="product.capa.url">
              <p>{{ product.nome }}</p>
              <p>{{ product.valor }}$</p>
              <button class="b-buy" @click="addToCart(product)">Add to Cart</button>
            </div>
        </slide>
      </div>
    </carousel>
  </div>    
</template>
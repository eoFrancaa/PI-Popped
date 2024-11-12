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

    <div class="products-container">
      <div 
        v-for="product in productStore.products" 
        :key="product.id" 
        class="clouth"
      >
        <div class="card">
          <img :src="product.capa.url" >
          <p>{{ product.nome }}</p>
          <p>{{ product.valor }}$</p>
          <button class="b-buy" @click="addToCart(product)">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.products-container {
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-evenly; 
  gap: 20px; 
  margin-top: 20px;
}


.card {
  width: 400px;
  height: 600px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  font-size: medium;
}


.b-buy {
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background-color: rgb(115, 39, 169);
  font-family: 'Dela Gothic One', sans-serif;
  color: rgb(227, 219, 226);
  cursor: pointer;
  transition: 0.5s;
  margin: 5px;
}

.card img {
  max-width: 80%;
}

.b-buy:hover {
  width: 110px;
  height: 60px;
  font-size: large;
}


.clouth-title {
  width: 100%;
  font-family: 'Inter', sans-serif;
  display: flex;
  justify-content: center;
  margin-top: 15vh;
 
}

@media (max-width: 768px) {
 
  .products-container {
    flex-direction: column; 
    align-items: center;
  }

  .card {
    width: 90%; 
    height: auto; 
  }
}
</style>

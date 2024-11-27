<script setup>
import 'vue-snap/dist/vue-snap.css'
import { ref, onMounted } from 'vue'

import ProductList from '@/components/ProductList.vue'

import { useCategoryStore } from '@/stores/category'

const categoryStore = useCategoryStore()

const currentCategory = ref(null)

function selectCategory(id) {
  currentCategory.value = id
}

onMounted(() => {
  categoryStore.getCategories()
})
</script>

<template>
  <div class="title">
    <h2>Select Some Category</h2>
  </div>
  <div class="itens">
    <div
    v-for="category in categoryStore.categories"
    :key="category.id"
    class="category"   @click="selectCategory(category.descricao)">
    <img :src="category.capa?.url" alt="" />
    <p>{{ category.descricao }}</p>
  </div>
</div>

<ProductList v-if="currentCategory" :category="currentCategory" />
</template>
<style scoped>
  .itens {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3vh;
    font-family: 'Dela Gothic One', sans-serif;
    color: rgb(58, 55, 58);
    margin-top: 5vh;
  }
.title {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0;
  color: blueviolet;
}

.title h2 {
  font-family: 'Inter', sans-serif;
}

.category{
  width: 150px;
  height: 150px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  box-shadow: 0 0 5px 0 grey;
  background: inherit;
  backdrop-filter: blur(20px);
  cursor: pointer;
}

.category:hover{
  width: 170px;
  height: 170px;
  color: blueviolet;
}

.category img{  
  max-width: 50px;
}

@media (max-width: 768px) {
 
  .category img {
  max-width: 50px;
  object-fit: cover 
}

.category{
  width: 100px;
  height: 75px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  box-shadow: 0 0 5px 0 grey; 
  background: inherit;
  backdrop-filter: blur(20px);
  cursor: pointer;
}
.category:hover{
  width: 110px;
  height: 85px;
  color: blueviolet;
}
.itens {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vh;
  font-family: 'Dela Gothic One', sans-serif;
  color: rgb(58, 55, 58);
  font-size: small;
}
.title {
  width: 75%;
  display: flex;
  justify-content: center;
  margin: 0;
  color: blueviolet;
  font-size:large ;
  margin-bottom: 3vh;
}
}

</style>

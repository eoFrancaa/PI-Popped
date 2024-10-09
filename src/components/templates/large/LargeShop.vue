<script setup>
import 'vue-snap/dist/vue-snap.css';
import { ref, computed, onMounted } from 'vue';

import ProductList from '@/components/ProductList.vue'
import NavbarVue from '@/components/Navbar.vue';

import { useCategoryStore } from '@/stores/category';

const categoryStore = useCategoryStore()





const currentCategory = ref(null);

const cart = ref([]);
const showCart = ref(false);

function selectCategory(id) {
  currentCategory.value = id
}

const removeFromCart = (item) => {
  const index = cart.value.indexOf(item);
  if (index > -1) {
    cart.value.splice(index, 1);
  }
};

const cartTotal = computed(() => {
  return cart.value.reduce((total, item) => total + item.valor, 0);
});

onMounted(() => {
  categoryStore.getCategories()
})


</script>

<template>
  <NavbarVue />
  <div class="title">
    <h2>Select Some Category</h2>
  </div>
  <div class="itens">
    <div v-for="category in categoryStore.categories" :key="category.id" class="category" @click="selectCategory(category.descricao)">
      <img :src="category.capa.url" alt="" />
      <p>{{category.descricao}}</p>
    </div>    
    <div class="cart-button" @click="showCart = !showCart">
      <img src="@/assets/Img/cart.png" alt="" />
      <p>Cart</p>
    </div>
  </div>

  <ProductList v-if="currentCategory" :category="currentCategory" />

 

  <div class="cart" :class="{ 'cart-show': showCart }">
    <p  @click="showCart = false"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></p>
    <div class="cart-title">
      <h2>My Cart</h2>
    </div>
    <div v-if="cart.length > 0">
      <ul>
        <li v-for="(item, index) in cart" :key="index" class="cart-item">
          <img :src="item.capa" alt="" class="cart-item-img" />
          <div class="cart-item-details">
            <p>{{ item.nome }}</p>
            <p>{{ item.valor }}$</p>
          </div>
          <button @click="removeFromCart(item)" class="remove-button">Remove</button>
        </li>
      </ul>
      <p class="total">Total: {{ cartTotal }}$</p>
      <button class="checkout-button">Checkout</button>
    </div>
    <div v-else>
      <p class="empty-cart">Your cart is empty.</p>
    </div>
  </div>
</template>
<style>
.title {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0px 40px 0px;
  color: blueviolet;
}
.title h2 {
  font-family: 'Inter', sans-serif;
}
.itens {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3vh;
  font-family: 'Dela Gothic One', sans-serif;
  color: rgb(58, 55, 58);
}
.category,
.cart-button {
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
.category:hover,
.cart-button:hover {
  width: 170px;
  height: 170px;
  color: blueviolet;
}
.category img,
.cart-button img{
  max-width: 70px;
}

.card {
  width: 400px;
  height: 600px;
  border: 1px solid rgba(0, 0, 0, 0.064);
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
.clouth,
.cup,
.bag {
  width: 100%;
  font-family: 'Inter', sans-serif;
}

.clouth img,
.cup img,
.bag img {
  max-width: 390px;
  max-height: 500px;
  object-fit: cover
}

.cart {
  position: fixed;
  top: 0;
  right: -100%;
  width: 300px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  transition: right 0.3s;
  z-index: 999;
  padding: 20px;
}

.cart-show {
  right: 0;
}

.cart-title {
  font-family: 'Inter', sans-serif;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.cart-item-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 15px;
}

.cart-item-details {
  flex-grow: 1;
}

.cart-item-details p {
  margin: 0;
}

.remove-button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.remove-button:hover {
  background-color: darkred;
}

.total {
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
}

.empty-cart {
  text-align: center;
  color: #888;
  margin-top: 20px;
}
.checkout-button{
 margin: 5vh;
  width: 200px;
  height: 40px;
  background-color: rgb(144, 0, 255);
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

</style>

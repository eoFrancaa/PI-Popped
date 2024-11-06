
<script setup>
import { ref, computed } from 'vue';
import { clothing, cups, bags } from '@/_data/shop.js';
import 'vue-snap/dist/vue-snap.css';

const Bag = ref(false);
const Cup = ref(false);
const Clothing = ref(false);

const cart = ref([]);
const showCart = ref(false);

const addToCart = (item) => {
  cart.value.push(item);
};

const removeFromCart = (item) => {
  const index = cart.value.indexOf(item);
  if (index > -1) {
    cart.value.splice(index, 1);
  }
};

const cartTotal = computed(() => {
  return cart.value.reduce((total, item) => total + item.valor, 0);
});

function Checkout() {
  alert('pix: 113.480.729-54');
}
</script>

<template>
  
  <div class="title">
    <h2>Select Some Category</h2>
  </div>
  <div class="itens">
    <div class="cups" @click="Cup = true; Bag = false; Clothing = false;">
      <img src="@/assets/Img/cups.png" alt="" />
      
    </div>
    <div class="bags" @click="Bag = true; Cup = false; Clothing = false;">
      <img src="@/assets/Img/mochila.png" alt="" />
      
    </div>
    <div class="clothing" @click="Clothing = true; Cup = false; Bag = false;">
      <img src="@/assets/Img/camisa.png" alt="" />
    
    </div>
    <div class="cart-button" @click="showCart = !showCart">
      <img src="@/assets/Img/cart.png" alt="" />
      
    </div>
  </div>

  <div v-if="Clothing">
    <div class="clouth-title">
      <h2>Clothing</h2>
    </div>
    <carousel>
      <div v-for="clouth in clothing" :key="clouth.id" class="clouth">
        <slide>
          <div class="card">
            <img :src="clouth.capa" />
            <p>{{ clouth.nome }}</p>
            <p>{{ clouth.valor }}$</p>
            <button class="b-buy" @click="addToCart(clouth)">Add to Cart</button>
          </div>
        </slide>
      </div>
    </carousel>
  </div>

  <div v-if="Cup">
    <div class="clouth-title">
      <h2>Cups</h2>
    </div>
    <carousel>
      <div v-for="cup in cups" :key="cup.id" class="cup">
        <slide>
          <div class="card">
            <img :src="cup.capa" />
            <p>{{ cup.nome }}</p>
            <p>{{ cup.valor }}$</p>
            <button class="b-buy" @click="addToCart(cup)">Add to Cart</button>
          </div>
        </slide>
      </div>
    </carousel>
  </div>

  <div v-if="Bag">
    <div class="clouth-title">
      <h2>Bag</h2>
    </div>
    <carousel>
      <div v-for="bag in bags" :key="bag.id" class="bag">
        <slide>
          <div class="card">
            <img :src="bag.capa" />
            <p>{{ bag.nome }}</p>
            <p>{{ bag.valor }}$</p>
            <button class="b-buy" @click="addToCart(bag)">Add to Cart</button>
          </div>
        </slide>
      </div>
    </carousel>
  </div>

  <div class="cart" :class="{ 'cart-show': showCart }">
    <p @click="showCart = false"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></p>
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
      <button class="checkout-button" @click="Checkout">Checkout</button>
    </div>
    <div v-else>
      <p class="empty-cart">Your cart is empty.</p>
    </div>
  </div>
  <footer>
  </footer>
</template>
<style scoped>
footer{
  position: fixed;
  bottom: 0;
}
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
.cups,
.bags,
.clothing,
.cart-button {
  width: 150px;
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
.cups:hover,
.bags:hover,
.clothing:hover,
.cart-button:hover {
  width: 150px;
  height: 80px;
  border-color: blueviolet;
}
.cups img,
.bags img,
.clothing img,
.cart-button img{
  max-width: 50px;

}

.card {
  width: 400px;
  height: 600px;
  border: 1px solid rgba(0, 0, 0, 0.064);
  border-radius: 10px;
  margin: 10px;
  margin-bottom: 10vh;
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

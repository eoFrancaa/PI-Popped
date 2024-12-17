<script setup>
import { ref, onMounted, computed } from 'vue'
import { useCompraStore } from '@/stores/compra'
import { useProductStore } from '@/stores/product'
import { useAuthStore } from '@/stores/auth'
import {  RouterLink, useRoute } from 'vue-router'

const router = useRoute()
const compraStore = useCompraStore()
const productStore = useProductStore()
const authStore = useAuthStore()

const showCart = ref(false)
const compras = ref([])
const products = ref({})

const filteredComprasByUser = computed(() => {
  const userId = authStore.user?.id
  return (
    compras.value.filter(
      (compra) => compra.usuario === userId && compra.status === 'Carrinho'
    )[0] || {}
  )
})

console.log(filteredComprasByUser)

const removeFromCart = async (id) => {
  await compraStore.removeFromCart(id)
}

onMounted(async () => {
  await compraStore.getComprasByProduct(router.params.id)
  compras.value = compraStore.compras
  products.value = await productStore.getProducts(router.params.id)
})


</script>

<template>
  
  <svg
    @click="showCart = true"
    xmlns="http://www.w3.org/2000/svg"
    height="27px"
    viewBox="0 -960 960 960"
    width="30px"
    fill="#000000"
  >
    <path
      d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"
    />
  </svg>
  <div class="cart" :class="{ 'cart-show': showCart }">
    <p @click="showCart = false">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#5f6368"
      >
        <path
          d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
        />
      </svg>
    </p>

    <div class="cart-title">
      <h2>My Cart</h2>
    </div>
    <div v-if="filteredComprasByUser?.itens?.length > 0">
      <ul>
        <li v-for="item in filteredComprasByUser.itens" :key="item" class="cart-item">
          <img :src="item.capa.url" alt="" class="cart-item-img" />
          <div class="cart-item-details">
            {{ item.nome || 'Produto sem nome' }}
            {{ item.valor || 'R$ 0,00' }}
          </div>
          <button @click="removeFromCart(item.id)" class="remove-button">Remove</button>
        </li>
      </ul>
      <RouterLink to="/sucesso">
        <button class="checkout-button " > Checkout</button>
      </RouterLink>
      {{ filteredComprasByUser.itens[1] }}
    </div>
    <div v-else>
      <p class="empty-cart">Your cart is empty.</p>
    </div>
  
  </div>

</template>
<style scoped>
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
.checkout-button {
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

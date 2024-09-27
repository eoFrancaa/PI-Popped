<script>
import ShopLargeView from '@/views/ShopLargeView.vue';
</script>

<template>
<footer>
  <router-link to="/">
  </router-link>
<p>Products</p>
<p>Discovery</p>
<router-link to="/shop">Shop</router-link>
</footer>
</template>

<style scoped>

footer{
  background-color: #9E59D4;  
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;  
  justify-content: center;
  gap: 20px;
  font-family: "Noto Sans Thai", sans-serif;
  border-radius: 10px;
}
a , p {
    text-decoration: none;
    color: black;
}

p:hover , a:hover{
  cursor: pointer;
  color:#e7d4ee;
  transition: all 0.5s;
}

</style>

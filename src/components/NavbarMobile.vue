<script>
import ShopLargeView from '@/views/ShopLargeView.vue';
</script>

<template>
<header>
  <router-link to="/">
  </router-link>
<p>Products</p>
<p>Discovery</p>
<router-link to="/shop">Shop</router-link>
</header>
</template>

<style scoped>

header{
  background-color: #9E59D4;  
  height: 50px;
  width: 100%;
  top: 599px;
  display: flex;
  align-items: center;  
  justify-content: center;
  gap: 20px;
  font-family: "Noto Sans Thai", sans-serif;
  border-radius: 10px;
}
a {
    text-decoration: none;
    color: black;
}

p:hover , a:hover{
  cursor: pointer;
  color:#A211D4;
  transition: all 0.5s;
}
img{
  max-height: 180px;
}
</style>

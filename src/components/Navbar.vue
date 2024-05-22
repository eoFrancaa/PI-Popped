<script>

</script>

<template>
<header>
  <router-link to="/">
    <img src="@/assets/Popped.png" alt="">
  </router-link>
<p>Products</p>
<p>Discovery</p>
<router-link to="/shop">Shop</router-link>
</header>
</template>

<style scoped>

header{
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;  
  gap: 20px;
  font-family: "Noto Sans Thai", sans-serif;
 

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

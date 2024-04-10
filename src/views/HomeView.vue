<script setup>
import Navbar from '@/components/Navbar.vue';

</script>

<template>
  <Navbar/>
 <main>
  <p>Welcome to</p>
  <h1>Popped .</h1>
  <div class="circulo">
    <img src="@/assets/fanta.png" alt="">
  </div>
  </main>

</template>
<style scoped>
main{
  font-family: "Inter", sans-serif;
  font-size: xx-large;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
 justify-content: center;
 flex-direction: column;
 color: #3C0250;

}
main h1{
  font-family: "Shrikhand", serif;
  color: #A211D4;
}
main div{
  align-items: baseline;
}
.circulo {
  background: #6E2F84;
  border-radius: 50%;
  width: 400px;
  height: 400px;
z-index: 3;
}

.circulo img{
  min-width: 414px;
  min-height: 400px;
  
}


</style>

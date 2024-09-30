<script setup>
import Navbar from '@/components/Navbar.vue';
import Outdoors from '@/components/Outdoors.vue';
import Flavors from '@/components/Flavors.vue';

</script>

<template>
  <Navbar/>
 <main>
  <p>Welcome to</p>
  <h1>Popped .</h1>
  <div class="circulo">
    <img src="@/assets/Img/Popped.png" alt="">
  </div>
  </main>
  <Outdoors/>
  <Flavors/>
  <footer>
    © Popped . 
  </footer>
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
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6E2F84;
  border-radius: 50%;
  width: 400px;
  height: 400px;
z-index: 3;
}

.circulo img{
  transition: 0.5s;
  width: 500px;
  height: 650px;
  
}
.circulo img:hover{
  width: 550px;
  height: 700px;
}


footer{
  width: 100%;
  height: 50px;
  color: #f0f0f0;
  background-color: #888689;
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

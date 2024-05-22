<script setup>
import NavbarVue from "@/components/Navbar.vue";

</script>
<template>
 <NavbarVue/>
 <div class="title">
  
 <h2>Select Some Category</h2>
 </div>
 <div class="itens">

  <div class="cups">
    <img src="@/assets/Img/cups.png" alt="">
    <p>Cups</p>
  </div>
  <div class="bags">
    <img src="@/assets/Img/mochila.png" alt="">
    <p>Bags</p>

  </div>
  <div class="clothing">
    <img src="@/assets/Img/camisa.png" alt="">
    <p>Clothing</p>

  </div>

</div>
</template>

<style>
.title{
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0px 40px 0px;
  color: blueviolet;
  

}
.title h2{
  font-family: "Inter", sans-serif;
}
.itens{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3vh;
  font-family: "Dela Gothic One", sans-serif;
  color: rgb(58, 55, 58);
}
.cups,.bags,.clothing{
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
  
}
.cups:hover,.bags:hover,.clothing:hover{
  width: 170px;
  height: 170px;
  color: blueviolet;
}
.cups img,.bags img,.clothing img{
  max-width: 70px;
  
}
</style>

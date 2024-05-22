<script setup>
import NavbarVue from "@/components/Navbar.vue";
import {clothing} from  "@/_data/shop.js"
import {cups} from  "@/_data/shop.js"
import {bags} from  "@/_data/shop.js"
import 'vue-snap/dist/vue-snap.css'
import { ref } from "vue";

 const Bag = ref(false);
 const Cup = ref(false);
 const Clothing = ref(false);

 

</script>
<template>
 <NavbarVue/>
 <div class="title">
  
 <h2>Select Some Category</h2>
 </div>
 <div class="itens">

  <div class="cups" @click="Cup = true,Bag=!Cup,Clothing=!Cup">
    <img src="@/assets/Img/cups.png" alt="">
    <p>Cups</p>
  </div>
  <div class="bags" @click="Bag = true,Cup=!Bag,Clothing=!Bag">
    <img src="@/assets/Img/mochila.png" alt="">
    <p>Bags</p>

  </div>
  <div class="clothing" @click="Clothing = true,Cup=!Clothing,Bag=!Clothing">
    <img src="@/assets/Img/camisa.png" alt="">
    <p>Clothing</p>

  </div>

</div>
<div class="roupas" v-if="Clothing ">

  <div class="clouth-title">
    <h2>Clothing</h2>
  </div>
  <carousel>
    <div v-for="clouth in clothing" :key="clouth.id" class="clouth">
  
    <slide>
      <div class="card">
        <img :src="clouth.img" >
        <p>{{ clouth.nome }}</p>
        <p>{{ clouth.valor }}$  </p>
        <button class="b-buy">Buy</button>
        
      </div>
    </slide>
  </div>
</carousel>
</div>

<div class="copos" v-if="Cup">

  <div class="clouth-title">
    <h2>Cups</h2>
  </div>
  <carousel>
    <div v-for="cup in cups" :key="cup.id" class="cup">
      
      <slide>
        <div class="card">
          <img :src="cup.img" >
          <p>{{ cup.nome }}</p>
          <p>{{ cup.valor }}$</p>
          <button class="b-buy">Buy</button>
        </div>
      </slide>
    </div>
  </carousel>
</div>
  
<div class="Bolsa" v-if="Bag ">

  <div class="clouth-title">
    <h2>Bag</h2>
  </div>
  <carousel>
    <div v-for="bag in bags" :key="bag.id" class="bag">
      
      <slide>
        <div class="card">
        <img :src="bag.img" >
        <p>{{ bag.nome }}</p>
        <p>{{ bag.valor }}$</p>
        <button class="b-buy">Buy</button>
      </div>
    </slide>
  </div>
</carousel>
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


.card{
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
.b-buy{
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background-color: rgb(115, 39, 169);
  font-family: "Dela Gothic One", sans-serif; 
  color:  rgb(227, 219, 226);
  cursor: pointer;
  transition: 0.5s;
  margin: 5px;
}
.b-buy:hover{
  width: 110px;
  height: 60px;
  font-size: large;
}
.clouth-title{
  width: 100%;
  font-family: "Inter", sans-serif;
  display: flex;
  justify-content: center;
  margin-top: 20vh;
}
.clouth,.cup,.bag{
  width: 100%;
  font-family: "Inter", sans-serif;
}

.clouth img,.cup img,.bag img{
  max-width: 390px;
  max-height: 500px;
}
</style>

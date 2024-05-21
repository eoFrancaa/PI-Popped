<script setup>
import Navbar from '@/components/Navbar.vue';
import 'vue-snap/dist/vue-snap.css'


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
  <div class="propagation">

    <carousel class="story-carousel" >
      <slide>
       <img src="@/assets/Img/outdor.png" alt="">
      </slide>
      <slide>
        <img src="@/assets/Img/outdor3.png" alt="">
      </slide>
      <slide>
        <img src="@/assets/Img/Advertising.png" alt="">
      </slide>
      <slide>
        <img src="@/assets/Img/outdor2.png" alt="">
      </slide>
    </carousel>



  </div>



  <div class="flavors">
   
    <div class="flavors-img">
     <carousel class="story-carousel" >

    <slide class="story-carousel__slide">

      <img src="@/assets/Img/Original.png" alt="">
      <h3 class="original">Original</h3>
    </slide>
    <slide class="story-carousel__slide">

      <img src="@/assets/Img/Forget.png" alt="">
      <h3 class="forget">Forget</h3>

    </slide>
    <slide class="story-carousel__slide">

      <img src="@/assets/Img/pineapple.png" alt="">
      <h3 class="orange">Orange & Pineapple</h3>
    </slide>
    <slide class="story-carousel__slide">

      <img src="@/assets/Img/Energy.png" alt="">
      <h3 class="energy">Energy Drink</h3>
    </slide>
      </carousel>
    
    </div>
  </div>
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
  
  width: 500px;
  height: 650px;
  
}
.propagation{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.propagation img{
 border-radius: 10px;
  max-width: 70%;
}

.flavors{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flavors-img h3{
  font-family: "Dela Gothic One", sans-serif;
  
}
.flavors-img img{
  max-width: 700px;
  transition: 0.5s;
}
.flavors-img img:hover{
  max-width: 750px;
}
.story-carousel .story-carousel__slide {
  height: 500px;
  width: 300px;

}
.original{
  color: #a541c9;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.216);
}
.forget{
  color: rgb(66, 82, 204);
  text-shadow: 2px 2px rgba(0, 0, 0, 0.216);
}
.orange{
  color: rgb(206, 152, 52);
  text-shadow: 2px 2px rgba(0, 0, 0, 0.216);
}
.energy{
  color: rgb(18, 136, 18);
  text-shadow: 2px 2px rgba(0, 0, 0, 0.216);
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
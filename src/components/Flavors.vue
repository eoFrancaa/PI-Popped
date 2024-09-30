<script setup>
import 'vue-snap/dist/vue-snap.css'
</script>

<template>
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

</template>
<style scoped>
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
  max-width: 70%;
  transition: 0.5s;
}
.flavors-img img:hover{
  max-width: 75%;
}
.story-carousel .story-carousel__slide {
  height: 30%;
  width: 50%;

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

</style>
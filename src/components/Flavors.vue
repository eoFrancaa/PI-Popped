<script setup>
import 'vue-snap/dist/vue-snap.css'
</script>

<template>
    <div class="flavors">
   
   <div class="flavors-img">
    <carousel class="story-carousel" >

   <slide class="story-carousel__slide">

     <img src="@/assets/Img/Original.png" alt="">
     <h4 class="original">Original</h4>
   </slide>
   <slide class="story-carousel__slide">

     <img src="@/assets/Img/Forget.png" alt="">
     <h4 class="forget">Forget</h4>

   </slide>
   <slide class="story-carousel__slide">

     <img src="@/assets/Img/pineapple.png" alt="">
     <h4 class="orange">Orange & Pineapple</h4>
   </slide>
   <slide class="story-carousel__slide">

     <img src="@/assets/Img/Energy.png" alt="">
     <h4 class="energy">Energy Drink</h4>
   </slide>
     </carousel>
   
   </div>
 </div>

</template>
<style scoped>
.flavors{
  width: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;

}

.flavors-img h4{
  font-family: "Dela Gothic One", sans-serif;
}
@media(max-width: 768px){
  .flavors-img h4{
  font-family: "Dela Gothic One", sans-serif;
  font-size: medium;
  gap: 1;
}

.story-carousel__slide {
  height: 55vh;
  width: 52vh;
}
.story-carousel{
  height: 50vh;
  width: 50vh;
  
}
}
.flavors-img img{
  max-width: 70%;
  transition: 0.5s;
}
.story-carousel .story-carousel__slide {
  height: 500px;
  width: 40vh;

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
<script setup>
import { flavors } from '@/_data/shop';
import 'vue-snap/dist/vue-snap.css'
</script>

<template>
    <div class="flavors">
   
   <div class="flavors-img">
    <carousel class="story-carousel" >

   <slide v-for="flavor in flavors" class="story-carousel__slide">

     <img :src="flavor.url" alt="">
     <h4 class="original">{{ flavor.descricao }}</h4>
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
  color: #504b52;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.216);
}

</style>
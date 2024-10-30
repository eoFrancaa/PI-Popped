<script setup>
import 'vue-snap/dist/vue-snap.css'

</script>

<template>
    <div class="propagation">

<!-- <carousel class="story-carousel" >
  <slide>
   <img :src="product.capa.url" alt="">
  </slide>
  <slide>
    <img :src="product.capa.url" alt="">
  </slide>
  <slide>
    <img :src="product.capa.url" alt="">
  </slide>
  <slide>
    <img :src="product.capa.url" alt="">
  </slide>
</carousel> -->

</div>

</template>
<style scoped>

.propagation{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.propagation img{
 border-radius: 10px;
  max-width: 70%;
  max-height: none;
}


.story-carousel .story-carousel__slide {
  height: 400px;
  width: 300px;

}

</style>
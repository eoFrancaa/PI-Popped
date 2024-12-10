<script setup>
import 'vue-snap/dist/vue-snap.css'
import { outdoors } from '@/_data/shop'
</script>
<template>
  <div class="propagation">
    <carousel class="story-carousel">
      <slide v-for="outdoor in outdoors" class="story-carousel__slide">
        <img :src="outdoor.url" alt="" />
      </slide>
    </carousel>
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


@media (max-width: 768px) {
  .propagation img{
 border-radius: 10px;
  max-width: 70%;
  max-height: none;
}

  .story-carousel__slide {
    height: 55vh;
    width: 55vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .story-carousel {
    height: 50vh;
    width: 50vh;
  }
}

</style>

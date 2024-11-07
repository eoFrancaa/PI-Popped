<script setup>
import 'vue-snap/dist/vue-snap.css'
</script>
<template>

  <div class="propagation">
    <carousel class="story-carousel">
      <slide class="story-carousel__slide">
        <img src="@/assets/Img/outdor.png" alt="">
      </slide>
      <slide class="story-carousel__slide">
        <img src="@/assets/Img/outdor3.png" alt="">
      </slide>
      <slide class="story-carousel__slide">
        <img src="@/assets/Img/Advertising.png" alt="">
      </slide>
      <slide class="story-carousel__slide">
        <img src="@/assets/Img/outdor2.png" alt="">
      </slide>
    </carousel>
  </div>


</template>
<style scoped>
.propagation {
  width: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5%;
}
.propagation img{
 border-radius: 10px;
  max-width: 70%;
  max-height: none;
}

@media(max-width: 768px){

.propagation img {
    border-radius: 10px;
    max-width: 60%;
    max-height: none;
  }

.story-carousel__slide {
  height: 55vh;
  width: 55vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.story-carousel{
  height: 50vh;
  width: 50vh;
  
}
}
.story-carousel .story-carousel__slide{
  height: 600px;
  width: 350px;

}
</style>
<script setup>
import NavbarMobile from '@/components/NavbarMobile.vue';
import Outdoors from '@/components/Outdoors.vue';
import Flavors from '@/components/Flavors.vue';


</script>

<template>
  <router-link to="/" class="img-popped">
    <img src="@/assets/Popped.png" alt="">
  </router-link>
  <main>
    <p>Welcome to</p>
    <h1>Popped .</h1>
    <div class="circulo">
      <img src="@/assets/Img/Popped.png" alt="">
    </div>
  </main>

    <Outdoors class="outdoors"/>

    <Flavors class="flavors"/>
  <footer>
    <Navbar-Mobile />
  </footer>
</template>
<style scoped>

.outdoors{
  margin-bottom: 15vh;
}
.flavors{
  margin-bottom: 15vh;

}

main {
  font-family: "Inter", sans-serif;
  font-size: xx-large;
  width:100%;
  height: 495px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #3C0250;

}

main h1 {
  display: flex;
  font-family: "Shrikhand", serif;
  color: #A211D4;
  font-size: 50px;
  align-items: center;
  justify-content: center;
}

main div {
  align-items: baseline;
}

.circulo {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6E2F84;
  border-radius: 50%;
  width: 40vh;
  height: 40vh;
  z-index: 3;
}

.circulo img {
  transition: 0.5s;
  width: 50vh;
  height: 60vh;

}

footer {
position: fixed;
bottom: 0;
}

.img-popped {
  display: flex;
  height: 20vh;
  width: 20vh;
  align-content: center;
  position: fixed;
  top: -5vh;
}

</style>

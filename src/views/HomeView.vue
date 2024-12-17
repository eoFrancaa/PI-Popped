<script setup>
import OutdoorsComp from '@/components/OutdoorsComp.vue';
import FlavorsComp from '@/components/FlavorsComp.vue';
import { bolinhas } from '@/_data/shop';
  </script>

<template>
  <main>
    <p>Welcome to</p>
    <h1>Popped .</h1>
    <div v-for="bolinha in bolinhas" :key="bolinha.id" class="circulo">
      <img :src="bolinha.url" alt="">
    </div>
    <OutdoorsComp class="outdoors" />
    <FlavorsComp class="flavors"/>
  </main>
</template>

<style scoped>
.outdoors {
  margin-top: 15vh;
  margin-bottom: 15vh;
}

.flavors {
  margin-bottom: 15vh;
}

main {
  font-family: "Inter", sans-serif;
  font-size: xx-large;
  width: 100%;
  height: auto; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #3C0250;
  padding: 20px; 
}

main h1 {
  display: flex;
  font-family: "Shrikhand", serif;
  color: #A211D4;
  font-size: 50px;
  align-items: center;
  justify-content: center;
  margin: 20px 0; 
}

.circulo {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6E2F84;
  border-radius: 50%;
  width: 400px;
  height: 400px;
  margin: 20px auto;
  z-index: 2;
}

.circulo img {
  transition: 0.5s;
  width: 500px;
  height: 650px;
}

  

@media (max-width: 1024px) {
  main {
    font-size: large;
  }

  .circulo {
    width: 350px;
    height: 350px;
  }

  .circulo img {
    width: 90%;
    height: auto;
  }

  .circulo img:hover {
    width: 100%;
    height: auto;
  }
}

@media (max-width: 768px) {
  main {
    font-size: medium;
  }

  .circulo {
    width: 300px;
    height: 300px;
  }

  .circulo img {
    width: 90%;
    height: auto;
  }

  .circulo img:hover {
    width: 100%;
    height: auto;
  }

  .outdoors,
  .flavors {
    margin-top: 10vh; 
    margin-bottom: 10vh;
  }
}

@media (max-width: 480px) {
  main {
    font-size: small;
  }

  .circulo {
    width: 200px;
    height: 200px;
  }

  .circulo img {
    width: 90%;
    height: auto;
  }

  .circulo img:hover {
    width: 100%;
    height: auto;
  }

  .outdoors,
  .flavors {
    margin-top: 5vh; 
    margin-bottom: 5vh;
  }
}
</style>

<script setup>
import { discoveries } from '@/_data/shop';
import { discoveriesText } from '@/_data/shop';
</script>

<template>
  <h3 id="sectionTitle">Desenvolvedores do Projeto</h3>
  <div class="container">
    <div class="circulos">
      <div class="fotos-dev" v-for="discovery in discoveries" :key="discovery">
        <img :src="discovery.url" alt="Foto do desenvolvedor">
        <h4 id="menuItemTitle">{{ discovery.descricao }}</h4>
      </div>
    </div>
    <div class="feature"></div>
    <div class="write">
      <p v-for="discoveryText in discoveriesText" :key="discoveryText"> 
      {{ discoveryText.texto }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start; 
  gap: 20px; 
}

#sectionTitle {
  font-size: 25px;
  margin-right: 555px;
}

.circulos {
  display: grid;
  grid-template-columns: repeat(2, 150px);
  gap: 20px;
  margin-top: 20px; 
}

.feature {
  background-color: black;
  width: 1px;
  height: 346px;
  margin-left: 20px;
}

.write {
  background-color: #DFC0F8;
  font-size: 20px;
  padding: 20px;
  width: 516px;
  height: auto;
  border-radius: 15px;
}

img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

#menuItemTitle {
  font-size: 18px;
  text-align: center;
  margin-top: 10px; 
}

@media (max-width: 1024px) {
  #sectionTitle {
    font-size: 1.9rem; 
    margin-bottom: 20px;
  }

  .container {
    flex-direction: column; 
    align-items: center;
  }

  .circulos {
    grid-template-columns: 1fr; 
    margin-top: 10px;
  }

  .feature {
    display: none; 

  .write {
    max-width: 90%; 
  }

  img {
    max-width: 130px; 
  }
}}


@media (max-width: 768px) {
  #sectionTitle {
    font-size: 1.8rem; 
    margin-bottom: 20px;
  }

  .container {
    flex-direction: column; 
    align-items: center;
  }

  .circulos {
    grid-template-columns: 1fr; 
    margin-top: 10px;
  }

  .feature {
    display: none; 
  }

  .write {
    max-width: 90%; 
    margin-top: 20px;
  }

  img {
    max-width: 120px; 
  }
}

@media (max-width: 480px) {
  #sectionTitle {
    font-size: 1.5rem; 
  }

  .circulos {
    grid-template-columns: 1fr;
  }

  .write {
    padding: 15px;
    font-size: 0.9rem;
  }

  img {
    max-width: 100px; 
  }
}

</style>

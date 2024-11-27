<script setup>
import { discoveries } from '@/_data/shop';
import { discoveriesText } from '@/_data/shop';
</script>
<template>
  <h3 id="sectionTitle">Desenvolvedores do Projeto</h3>
  <div class="container">
    <div class="circulos">
      <div class="fotos-dev" v-for="discovery in discoveries">
        <img :src="discovery.url" alt="">
        <h4 id="menuItemTitle">{{ discovery.descricao }}</h4>
      </div>
    </div>
    <div class="feature"></div>
    <div class="write">
      <p v-for="discoveryText in discoveriesText"> 
      {{ discoveryText.texto }}
      </p>
    </div>
  </div>

</template>
<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#sectionTitle {
  font-size: 25px;
  margin-right: 555px;
}
.circulos {
  display: grid;
  grid-template-columns: repeat(2, 150px);
  grid-template-rows: repeat(2, 150px);
  gap: 20px;
}

.feature {
  background-color: black;
  width: 1px;
  height: 346.01px;
  display: flex;
  justify-content: center;
  margin-left: 80px;
}
.write {
  background-color: #DFC0F8;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 516px;
  height: 417px;
  margin-left: 50px;
  border-radius: 5%;
}

img {
  width: 155px;
  height: 155px;
  border-radius: 50%;
  margin-bottom: 40px;
}
#menuItemTitle {
  font-size: 20px;
}

</style>
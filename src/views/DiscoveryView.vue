<script setup>
import { discoveries } from '@/_data/shop';
</script>
<template>
  <h3>Desenvolvedores do Projeto</h3>
  <div class="container">
    <div class="circulos">
      <div class="fotos-dev" v-for="discovery in discoveries">
        <img :src="discovery.url" alt="">
        <h4>{{ discovery.descricao }}</h4>
      </div>
    </div>
    <div class="feature"></div>
    <div class="write">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident debitis impedit qui quam suscipit tenetur,
        earum ipsam nulla consectetur maiores harum architecto quis ea eos, voluptatibus tempore nesciunt nobis
        cupiditate!</p>
    </div>
  </div>

</template>
<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
.write{
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 516px;
  height: 417px;
  margin-left: 50px;
  border-radius: 5%;
}

img {
  width: 80px;
  height: 80px;
}

h3 {
  margin-bottom: 20px;

}
</style>
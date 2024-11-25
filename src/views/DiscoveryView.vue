<script setup>
import { discoveries} from '@/_data/shop';
</script>
<template>
<div class="container">
    <div class="fotos-dev" v-for="discovery in  discoveries">
        <img :src="discovery.url" alt="">
        <h4>{{ discovery.descricao }}</h4>
    </div>
</div>

</template>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap; /* Permite quebra de linha */
  gap: 10px; /* Espaçamento entre os elementos */
  padding: 20px;
  justify-content: center; /* Centraliza os itens */
}
.fotos-dev{
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6E2F84;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  z-index: 2;
}
img{    
    width: 80px;
    height: 80px;
}
h4{
 font-size: small;
}
</style>
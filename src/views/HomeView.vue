<script setup>
import { onMounted } from 'vue';
import { Passage } from '@passageidentity/passage-js';

import { useAuthStore } from '@/stores/auth';
import Outdoors from '@/components/Outdoors.vue';
import Flavors from '@/components/Flavors.vue';

const authStore = useAuthStore();

const getUserInfo = async () => {
  try {
    const authToken = localStorage.getItem('psg_auth_token');
    const passage = new Passage(process.env.VITE_PASSAGE_APP_ID);
    const user = await passage.currentUser.info()
    if (user) {
      await authStore.setToken(authToken);
    } else {
      authStore.unsetToken();
    }
  } catch (error) {
    authStore.unsetToken();
  }
};

onMounted(() => {
  // getUserInfo();
});
</script>

<template>
  <p>Welcome to</p>
  <h1>Popped .</h1>
  <div class="circulo">
    <img src="@/assets/Img/Popped.png" alt="">
  </div>

  <Outdoors />
  <Flavors />
</template>

<style scoped>
h1{
  font-family: "Shrikhand", serif;
  color: #A211D4;
}
div{
  align-items: baseline;
}

.circulo {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6E2F84;
  border-radius: 50%;
  width: 400px;
  height: 400px;
z-index: 3;
}

.circulo img{
  transition: 0.5s;
  width: 500px;
  height: 650px;
  
}
.circulo img:hover{
  width: 550px;
  height: 700px;
}

</style>


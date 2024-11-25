
<script setup>
import { onMounted } from 'vue';
import { Passage } from '@passageidentity/passage-js';
import { bolinha } from '@/_data/shop';
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
  <div v-for="bolinhas in bolinha" class="circulo">
    <img :src="bolinhas.url" alt="">
  </div>
  <Outdoors />
  <Flavors />
</template>

<style scoped>
h1 {
  font-family: "Shrikhand", serif;
  color: #A211D4;
  text-align: center;
}

.circulo {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6E2F84;
  border-radius: 50%;
  width: 400px;
  height: 400px;
  margin: 0 auto;
  z-index: 2;
}

.circulo img {
  transition: 0.5s;
  width: 500px;
  height: 650px;
}

.circulo img:hover {
  width: 550px;
  height: 700px;
}

@media (max-width: 768px) {
  .circulo {
    width: 300px;
    height: 300px;
    
  }
  .circulo img {
    width: 350px;
    height: 450px;
  }

  .circulo img:hover {
    width: 380px;
    height: 500px;
  }

  h1 {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .circulo {
    width: 200px;
    height: 200px;
  }

  .circulo img {
    width: 250px;
    height: 350px;
  }

  .circulo img:hover {
    width: 280px;
    height: 380px;
  }

  h1 {
    font-size: 1.5rem;
  }

  p {
    text-align: center;
    font-size: 1rem;
  }
}
</style>

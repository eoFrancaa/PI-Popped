<script setup>
import { onMounted } from 'vue';
import { Passage } from '@passageidentity/passage-js';
import { useAuthStore } from '@/stores/auth';

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
  getUserInfo();
});
</script>

<template>
  <h1>Teste</h1>

</template>
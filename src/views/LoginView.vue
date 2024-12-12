<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth'; 
import '@passageidentity/passage-elements/passage-auth';

const authStore = useAuthStore();
const isAuthenticated = ref(authStore.isAuthenticated);

const handleAuthChange = (event) => {
  if (event.detail && event.detail.user) {
    authStore.login(event.detail.user.token); 
  } else {
    authStore.logout(); 
  }
};

window.addEventListener('passage-auth', handleAuthChange);
</script>
<template>
  <h1>Login</h1>
  <div class="authContainer">
    <passage-auth
      app-id="WILeZmSDlwp4gei5lni1YHom"
      @auth="handleAuthChange"
    ></passage-auth>
  </div>
  <div v-if="isAuthenticated">Usuário logado!</div>
</template>



<script setup>
import { onMounted} from 'vue'
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router'
const authStore = useAuthStore()
const router = useRouter()

onMounted(() => {
  authStore.unsetToken()
  localStorage.removeItem('psg_auth_token')
  router.push({ name: 'home' })
})
</script>

<template>
  <h1>Logging out..</h1>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4; 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  color: #333;
  font-size: 24px;
  text-align: center;
  margin: 0;
  padding: 20px;
  background-color: #fff; 
  border-radius: 8px; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
}
</style>
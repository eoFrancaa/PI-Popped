import { ref } from 'vue';
import { defineStore } from 'pinia';
import AuthService from '@/services/auth';

const authService = new AuthService();

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const isAuthenticated = ref(false);

  async function login(credentials) {
    try {
      const data = await authService.login(credentials); 
      user.value = data.user; 
      isAuthenticated.value = true;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      isAuthenticated.value = false;
    }
  }

  function logout() {
    user.value = null;
    isAuthenticated.value = false;
    authService.logout(); 
  }

  return { user, isAuthenticated, login, logout };
});
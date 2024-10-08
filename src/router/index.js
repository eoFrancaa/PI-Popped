import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import LayoutFullShop from '@/layouts/LayoutFullShop.vue';
import LayoutFull from '@/layouts/LayoutFull.vue';
import LoginView from '@/views/LoginView.vue'
import LogoutView from '@/views/LogoutView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView,
        },
       
      ],
    },
    {
      path: '/shop',
      name: 'shop',
      component: LayoutFullShop
      
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutView
    },


  ]
})

export default router

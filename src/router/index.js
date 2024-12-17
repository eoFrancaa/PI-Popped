import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import LayoutFull from '@/layouts/LayoutFull.vue';
import LoginView from '@/views/LoginView.vue';
import LogoutView from '@/views/LogoutView.vue';
import ShopView from '@/views/ShopView.vue';
import DiscoveryView from '@/views/DiscoveryView.vue';
import Sucesso from "@/views/Sucesso.vue"



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
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
        {
          path: '',
          name: 'Home',
          component: HomeView,
        },
        {
          path: '/discovery',
          name: 'discovery',
          component: DiscoveryView
        },
        {
          path: '/shop',
          name: 'shop',
          component: ShopView         
        },
        {
          path: "/sucesso",
          name: "Sucesso",
          component: Sucesso,
        },
      ],
    },
    
    
  ]
})
export default router

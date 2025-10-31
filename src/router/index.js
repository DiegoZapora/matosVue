import Home from '@/views/Home.vue'
import Pedidos from '@/views/Pedidos.vue'
import Ingredientes from '@/views/Ingredientes/Ingredientes.vue'
import Pao from '@/views/Ingredientes/Pao.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Cadastrar from '@/views/Cadastrar/Cadastrar.vue'
import Carne from '@/views/Ingredientes/Carne.vue'
import Queijo from '@/views/Ingredientes/Queijo.vue'
import Adicionais from '@/views/Ingredientes/Adicionais.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/pedidos",
      name: "Pedidos",
      component: Pedidos
    },
    {
      path: "/ingredientes",
      name: "ingredientes",
      component: Ingredientes
    },
    {
      path: "/cadastrar",
      name: "Cadastrar",
      component: Cadastrar
    },
    {
      path: "/cadastrar/pao",
      name: "pao",
      component: Pao
    },
    {
      path: "/cadastrar/carne",
      name: "carne",
      component: Carne
    },
    {
      path: "/cadastrar/queijo",
      name: "queijo",
      component: Queijo
    },
    {
      path: "/cadastrar/adicionais",
      name: "adicionais",
      component: Adicionais
    }
  ],
})

export default router
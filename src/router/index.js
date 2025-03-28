import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Contador',
      name: 'contador',
      component: () => import('../modules/contador/components/Contador.vue'),
    },
    {
      path: '/ListaDeTareas',
      name: 'tareas',
      component: () => import('../modules/listaDetareas/components/ListaDeTareas.vue'),
    },
    {
      path: '/Registrar',
      name: 'registro',
      component: () => import('../modules/registro/views/RegistrarView.vue'),
    },
  ],
})

export default router

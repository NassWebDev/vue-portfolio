import { createRouter, createWebHistory } from 'vue-router';
const AcceuilView = () => import('../views/sections/AcceuilView.vue')
const AProposView = () => import('../views/sections/AProposView.vue')
const ProjetsView = () => import('../views/sections/ProjetsView.vue')
const ContactView = () => import('../views/sections/ContactView.vue')

const routes = [
  {
    path: '/accueil',
    redirect: {name: 'accueil'}
  },
  {
    path: '/',
    name: 'accueil',
    component: AcceuilView
  },
  {
    path: '/apropos',
    name: 'apropos',
    component: AProposView
  },
  {
    path: '/projets',
    name: 'projets',
    component: ProjetsView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

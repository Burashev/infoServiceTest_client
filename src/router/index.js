import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "signIn" */ '../views/SignIn.vue')
  },
  {
    path: '/sign_up',
    name: 'signUp',
    component: () => import(/* webpackChunkName: "signIn" */ '../views/SignUp.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

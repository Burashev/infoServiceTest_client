import {createRouter, createWebHistory} from 'vue-router'
import store from '@/store'

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '../views/Index.vue'),
        meta: {
            isVerified: true,
        }
    },
    {
        path: '/sign_in',
        name: 'signIn',
        component: () => import(/* webpackChunkName: "signIn" */ '../views/SignIn.vue')
    },
    {
        path: '/sign_up',
        name: 'signUp',
        component: () => import(/* webpackChunkName: "signUp" */ '../views/SignUp.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from) => {
    if (to.meta.isVerified && !store.getters["user/isVerified"]) {
        store.dispatch('notification/createNotification', {
            text: 'You need verified your email',
            error: true
        }).then();
        return {name: 'signIn'}
    }
})

export default router

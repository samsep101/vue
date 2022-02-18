import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/map',
        name: 'Map',
        component: ()=>import('../views/Map.vue')
    },
    {
        path: '/about-bank',
        name: 'about-bank',
        component: () => import('../views/About-Bank.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/Contact.vue')
    },
    {
        path: '/news',
        name: 'news',
        component: () => import('../views/News.vue')
    },
    {
        path: '/mortgage',
        name: 'mortgage',
        component: () => import('../views/Mortgage.vue')
    }
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
import {createRouter, createWebHistory} from 'vue-router'
import Aboutpage from '../views/AboutPage'
import Homepage from '../views/HomePage'

const routes = [
    {
        path: '/about',
        name: 'Aboutpage',
        component: Aboutpage
    },
    {
        path: '/',
        name: 'HomePage',
        component: Homepage
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

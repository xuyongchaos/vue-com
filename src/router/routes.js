import Home from 'views/Home.vue'

export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/count-to',
        name: 'count-to',
        component: () => import('views/count-to.vue')
    }
]
export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('./Home.vue')
    }
]

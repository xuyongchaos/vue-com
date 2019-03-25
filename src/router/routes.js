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
    },
    {
      path: '/split-pane',
      name: 'split-pane',
      component: () => import('views/split-pane.vue')
    },
    {
        path: '/grid',
        name: 'grid',
        component: () => import('views/grid.vue')
    },
    {
      path: '/graph',
      name: 'graph',
      component: () => import('views/graph.vue')
    },
    {
      path: '/loading',
      name: 'loading',
      component: () => import('views/loading.vue')
    },
    {
      path: '/modal',
      name: 'modal',
      component: () => import('views/modal.vue')
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('views/button.vue')
    },

]
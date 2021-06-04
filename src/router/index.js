import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tree',
    name: 'Tree',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "tree" */ '../views/Tree.vue')
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "blog" */ '../views/Blog.vue')
    }
  },
  {
    path: '/fun-facts',
    name: 'Fun-facts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "fun-facts" */ '../views/Fun-facts.vue')
    }
  },
  {
    path: '/api',
    name: 'API',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "fun-facts" */ '../views/API.vue')
    }
  },
  {
    path: '/murphrj',
    name: 'Murphrj',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "Murphyrj" */ '../views/subvues/Murphrj.vue')
    }
  },
  {
    path: '/cahilljm',
    name: 'Cahilljm',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "Murphyrj" */ '../views/subvues/Cahilljm.vue')
    }
  },
  {
    path: '/murphje2',
    name: 'Murphje2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "Murphyje2" */ '../views/subvues/Murphje2.vue')
    }
  },
  {
    path: '/cahillkw',
    name: 'Cahillkw',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "Cahillkw" */ '../views/subvues/Cahillkw.vue')
    }
  },
  {
    path: '/murphje',
    name: 'Murphje',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "Murphyrj" */ '../views/subvues/Murphje.vue')
    }
  },
  {
    path: '/murphhc',
    name: 'Murphhc',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "Murphyrj" */ '../views/subvues/Murphhc.vue')
    }
  },
  {
    path: '/murphje2',
    name: 'Murphje2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "Murphyje2" */ '../views/subvues/Murphje2.vue')
    }
  },
  {
    path: '/hubinaje',
    name: 'Hubinaje',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "Murphyje2" */ '../views/subvues/Hubinaje.vue')
    }
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Agreement from './views/Agreement.vue'
import Pricing from './views/page/Pricing.vue'
import RequestQuote from './views/page/Quote.vue'
import DomainChecker from './views/DomainChecker.vue'

import Dashboard from './views/admin/Dashboard.vue'
import AdminQuote from './views/admin/Quote.vue'
//import QouteGenerator from './views/admin/QouteGenerator.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior() {
    return { y: 0 };
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: Agreement
    },
    {
      path: '/request-quote',
      component: RequestQuote
    },
    {
      path: '/pricing',
      component: Pricing
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/admin',
      component: Dashboard,
      children: [
        {
          path: 'qoute',
          component: AdminQuote
        }
      ]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Agreement from './views/Agreement.vue'
import Service from './views/services/Service.vue'
import Pricing from './views/pricing/Pricing.vue'
import DomainChecker from './views/DomainChecker.vue'

import Dashboard from './views/admin/Dashboard.vue'
import Quote from './views/admin/Quote.vue'
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
      path: '/services/:service',
      name: 'services',
      component: Service
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/domain',
      component: DomainChecker
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
          component: Quote
        }
      ]
    }
  ]
})

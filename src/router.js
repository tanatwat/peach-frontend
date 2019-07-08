import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Agreement from './views/Agreement.vue'
import Pricing from './views/page/Pricing.vue'
import RequestQuote from './views/page/Quote.vue'

import Dashboard from './views/admin/Dashboard.vue'
import AdminQuote from './views/admin/Quote.vue'

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

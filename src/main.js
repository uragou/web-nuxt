import Vue from 'vue'
import App from './App.vue'
import Head from './Head.vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import Contact from './components/Contact.vue'

Vue.config.productionTip = false


Vue.use(Router)

const routes = [
  { path: '/' , component:Home },
  { path: '/contact' , component:Contact }
]

const router = new Router({
  routes
})

new Vue({
  router,
  render: h => h(Head),
}).$mount('#head')

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')



import Vue from 'vue'
import Jets from 'jets'
import VueRouter from 'vue-router'
import App from './App'
import ListView from './components/ListView'
import DetailsView from './components/DetailsView'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: ListView },
  { path: '/employee/:id', component: DetailsView, name: 'employee' }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})

/* eslint-disable no-new */
new Jets({
  searchTag: '#personSearch',
  contentTag: '#personContent'
})

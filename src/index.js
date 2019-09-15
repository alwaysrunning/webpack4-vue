import Vue from 'vue'
import app from './App.vue'
import router from './router/router'

new Vue({
  el:'#app',
  router,
  render:(h)=>h(app)
})
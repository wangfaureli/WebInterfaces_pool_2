import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

Vue.use(Router)


const router = new Router({
    routes: [
    //   {
    //     path: '/the-path/',
    //     component: TheComponent
    //   },
      
    ]
  })
  
Vue.config.productionTip = false

new Vue({
    router, 
    render: h => h(App),
  }).$mount('#app')
  
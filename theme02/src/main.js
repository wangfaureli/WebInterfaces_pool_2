import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import WorkingTimes from './components/WorkingTimes.vue';
import WorkingTime from './components/WorkingTime.vue';
import ClockManager from './components/ClockManager.vue';
import ChartManager from './components/ChartManager.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/workingTimes/:userid',
      component: WorkingTimes,
    },
    {
      path: '/workingTime/:userid',
      component: WorkingTime,
    },
    {
      path: '/workingTime/:userid/:workingtimeid',
      component: WorkingTime,
    },
    {
      path: '/clock/:userid',
      component: ClockManager,
    }, 
    { 
      path: '/chartManager/:userid',
      component: ChartManager,
    },
  ],
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

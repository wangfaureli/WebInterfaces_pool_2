import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import WorkingTimes from './components/WorkingTimes.vue';
import WorkingTime from './components/WorkingTime.vue';
import ClockManager from './components/ClockManager.vue';
import ChartManager from './components/ChartManager.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/workingTimes/:userId',
      component: WorkingTimes,
    },
    {
      path: '/workingTime/:userId',
      component: WorkingTime,
    },
    {
      path: '/workingTime/:userId/:workingTimeId',
      component: WorkingTime,
    },
    {
      path: '/clock/:userId',
      component: ClockManager,
    },
    {
      path: '/chartManager/:userId',
      component: ChartManager,
    },
  ],
});

Vue.prototype.userId = '';

new Vue({
  router,
  async mounted() {
    Vue.prototype.userId = this.$route.params.userId;
  },
  render: (h) => h(App),
}).$mount('#app');

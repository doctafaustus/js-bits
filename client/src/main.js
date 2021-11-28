import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueAnalytics from 'vue-analytics';


Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: 'UA-171716275-1',
  router
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

const protocol = window.location.protocol;
window.baseURL = (window.location.host.includes('jsbits-yo.com')) ? 
`${window.location.protocol}//${window.location.host}/api` : `${protocol}//localhost:8081/api`;

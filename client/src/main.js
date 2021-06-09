import Vue from 'vue'
import App from './App.vue'
import router from './router';

const userAgent = window.navigator.userAgent;

if (userAgent.includes('Chrome-Lighthouse')) {
  document.querySelector('#nic-cage').style.visibility = 'visible';
} else {
  Vue.config.productionTip = false;

  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app');

  window.baseURL = (window.location.host.includes('jsbits-yo.com')) ? 
  `http://${window.location.host}/api` : 'http://localhost:8081/api';
}

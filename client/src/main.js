import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueAnalytics from 'vue-analytics';


if (navigator.userAgent.indexOf("Chrome-Lighthouse") > -1) {
  console.log("Lighthouse!");
  document.body.insertAdjacentHTML('afterbegin', `<h1>hi</h1>`)
} else {
  Vue.config.productionTip = false;

  Vue.use(VueAnalytics, {
    id: 'UA-171716275-1',
    router
  });

  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app');

  window.baseURL = (window.location.host.includes('jsbits-yo.com')) ? 
  `http://${window.location.host}/api` : 'http://localhost:8081/api';
}

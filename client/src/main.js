import Vue from 'vue'
import App from './App.vue'
import router from './router';

const userAgent = window.navigator.userAgent;

if (userAgent.includes('Chrome-Lighthouse')) {
  document.querySelector('#nic-cage').style.visibility = 'visible';
} else {
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app');
}


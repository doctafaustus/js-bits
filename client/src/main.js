import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueHighlightJS from 'vue-highlightjs';
import VueAnalytics from 'vue-analytics';


Vue.config.productionTip = false;

Vue.use(VueHighlightJS);
Vue.use(VueAnalytics, {
  id: 'UA-171716275-1',
  router
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

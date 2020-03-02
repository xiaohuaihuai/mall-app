import Vue from 'vue';
import App from '@/App';
import { router } from '@/router';
import { config } from '@/config';

Vue.prototype.$config = config
// eslint-disable-next-line no-console
console.log('config:{}', config)
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});

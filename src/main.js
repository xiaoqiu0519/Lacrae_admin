import Vue from "vue";
import App from "./App.vue";
import { get, post } from "./js/config";
var SocialSharing = require('vue-social-sharing');
 
Vue.use(SocialSharing);

Vue.config.productionTip = false;
Vue.prototype.$get = get;
Vue.prototype.$post = post;

new Vue({
  render: h => h(App)
}).$mount("#app");

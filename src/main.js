import Vue from "vue";
import App from "./App.vue";
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {get, post } from "./js/config";
Vue.use(ElementUi);

Vue.config.productionTip = false;
Vue.prototype.$get = get;
Vue.prototype.$post = post;

new Vue({
    render: h => h(App)
}).$mount("#app");
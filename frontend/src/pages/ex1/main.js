import Vue from "vue";
import ex1 from "./ex1.vue";
import store from "../../store";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
 

Vue.config.productionTip = false;
Vue.use(BootstrapVue)

new Vue({
  el: '#ex1',
  store,
  render: function(h) {
    return h(ex1);
  }
}).$mount("#ex1");

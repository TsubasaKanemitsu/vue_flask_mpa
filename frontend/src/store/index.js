import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  },
  actions: {
    increment(context){
      context.commit('increment')
    },
    async_get() {
      const url = '/test?num1=3&num2=4'
      axios.get(url)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function(error){
        console.log(error);
      })
    },
    async_post() {
      const url = '/test2'
      const data = {
        num1: "1",
        num2: "2"
      }
      axios.post(url, data)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function(error){
        console.log(error);
      })
    }

  }
})

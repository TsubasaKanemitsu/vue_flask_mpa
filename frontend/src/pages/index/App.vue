<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Counter/>
    <button type="button" class="btn btn-secondary">Button</button>
    <loginpage/>
  </div>
</template>

<script>
import Counter from "../../components/Counter.vue";
import loginpage from "../..//components/login_page.vue";

export default {
  name: "App",
  components: {
    Counter,
    loginpage
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

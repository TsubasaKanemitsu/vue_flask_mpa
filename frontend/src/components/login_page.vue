<template>
    <div>
  <b-card
    header="Login"
    header-text-variant="white"
    header-tag="header"
    header-bg-variant="primary"
    title="welcome to vue project"
    style="max-width: 20rem;"
  >
    <b-card-text>
        <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
        <b-form-input v-model="password" :type="`password`"></b-form-input>
    </b-card-text>
  </b-card>
  </div>
</template>

<script>
  export default {
    name: "loginpage",
    data() {
      return {
        text: '',
        password: ''
      }
    }
  }
</script>
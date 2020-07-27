<template>
    <div id="ex1">
            <Button v-bind:props_button_name="name" />
    </div>
</template>


<script>
import Button from "../../components/atoms/button.vue";

export default {
  name: "ex1",
  components: {
    Button
  },
  data (){
      return {
          name: 'props_button_name'
      }
  }
};
</script>

<style lang="scss">
#ex1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

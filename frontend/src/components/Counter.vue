<template>
    <div>
      <p>{{ count }}</p>
      <!-- <p>{{ test }}</P> -->
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="increment_act">++</button>
        <button @click="get">get</button>
        <button @click="post">post</button>
      </p>
      <p>
        <input type="number"> + <input type="number"> = {{}}
      </p>
    </div>
</template>

<script>
export default {
    name: "Counter",
    computed: {
    count () {
	    return this.$store.state.count
    }
    },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
    	this.$store.commit('decrement')
    },
    increment_act(){
        this.$store.dispatch('increment')
    },
    get() {
        this.$store.dispatch('async_get')
    },
    post() {
        this.$store.dispatch('async_post')
    }
  }
}
</script>
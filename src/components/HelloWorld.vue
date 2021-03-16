<template>
  <div class="hello">
    <h1>--- {{ msg }} ---</h1>
    <div>
      <p>{{ counter }}</p>
    </div>
    <div class="display">
      <button @click="Increment">Increment</button>
      <button @click="Decrement">Decrement</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters(['counter']),
  },
  methods: {
    ...mapActions(['Increment']),
    ...mapActions(['Decrement']),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: blueviolet;
}
.display {
  margin-top: 10%;
}
</style>

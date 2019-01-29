<template>
  <div id="app">
    <todo-list></todo-list>
  </div>
</template>

<script>
  import todoList from './components/todoList.vue'

export default {
  name: 'app',
  components: {
    'todo-list': todoList
  },
  data () {
    return {
    }
  },
  methods: {

  },
  computed: {

  },
  mounted() {
  }
}
</script>

<style lang="scss">

</style>

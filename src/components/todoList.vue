<template>
  <div id="todo-list">
    <input v-model="newItem.title" type="text" @keyup.enter="addTodo(newItem)">
    <button @click="addTodo(newItem)">Добавить</button>
    <div>
      <todo-item :item="item" :key="item.id" v-for="item in todoItems">

      </todo-item>

    </div>
  </div>
</template>

<script>
  import todoItem from './todoItem.vue'

  export default {
    components: {
      'todo-item': todoItem
    },
    data() {
      return {
        newItem: {
          id: 0,
          title: ""
        },
        updateItem: {

        },
        changeInput: false
      }
    },
    methods: {
      addTodo: function (item) {
        if (item.title !== "") {
          if (this.todoItems.length > 0) {
            let lastId = this.todoItems[this.todoItems.length - 1].id;
            item.id = lastId + 1;
          }
          this.todoItems = item
          this.newItem = {
            id: 0,
            title: ""
          }
        }
      }
    },
    computed: {
      todoItems: {
        get() {
          return this.$store.state.todoItems;
        },
        set(v) {
         return this.$store.commit('pushTodoItems', v)
        }
      }
    }
  }

</script>

<style lang="scss">

</style>

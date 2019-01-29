<template>
  <div>
    <div @click="rename(item)">{{item.title}}</div>
    <div>{{item.id}}</div>
    <button @click="rename()">Редактировать</button>
    <button @click="removeTodo(item)">Удалить</button>
    <input v-model="updateItem.title" v-if="changeInput" @keyup.enter="addRename()" type="text">
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object
      }
    },
    data() {
      return {
        updateItem: {

        },
        changeInput: false
      }
    },
    methods: {
      removeTodo: function (item) {
        for (let i = 0; i < this.todoItems.length; i++) {
          if (item.id === this.todoItems[i].id) {
            this.$store.commit('deleteTodoItem', i)
            break
          }
        }
      },
      rename() {
        this.updateItem = {...this.item}
        this.changeInput = true
      },
      addRename() {
        for (let i = 0; i < this.todoItems.length; i++) {
          if (this.updateItem.id === this.todoItems[i].id) {
            this.todoItems[i].title = this.updateItem.title
          }
        }
        this.changeInput = false
        this.updateItem = {}
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
    },
    mounted() {
      console.log(this)
      console.log(this.$store)
      console.log(this.$store.state)
    }
  }
</script>

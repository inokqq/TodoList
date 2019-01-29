const mutations = {
  pushTodoItems(state, payload) {
    state.todoItems.push(payload)
  },
  deleteTodoItem(state, index) {
    state.todoItems.splice(index, 1)
  }
}

export default mutations

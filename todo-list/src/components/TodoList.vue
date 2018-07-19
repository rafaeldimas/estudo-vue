<template>
  <div class="todo-list">
    <TodoListForm v-on:updateList="updateList"/>
    <table class="table-todo-list">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Criado</th>
          <th>Expira</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <TodoListItem
          v-for="item in list"
          :item="item"
          :key="item.id"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import TodoListForm from '@/components/TodoListForm'
import TodoListItem from '@/components/TodoListItem'

export default {
  name: 'TodoList',
  components: {
    TodoListForm,
    TodoListItem
  },
  data () {
    return {
      countItem: 0,
      list: []
    }
  },
  methods: {
    updateList: function (item) {
      item.id = ++this.countItem
      this.list.push(item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

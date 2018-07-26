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
          v-on:alterStatus="alterStatus"
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
  mounted () {
    const list = window.localStorage.getItem('list')
    if (list) {
      this.list = JSON.parse(list)
    }
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
      window.localStorage.setItem('list', JSON.stringify(this.list))
    },
    alterStatus: function (data) {
      let item = this.list.find(item => item.id === data.id)
      let index = this.list.find(item => item.id === data.id)

      item.status = data.status

      this.list[index] = item
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.todo-list {
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 15px;
  width: 100%;
  max-width: 500px;
}

.todo-list .table-todo-list {
  width: 100%;
  border-collapse: collapse;
}

.todo-list .table-todo-list thead tr th {
  padding-top: 5px;
  padding-bottom: 15px;
  color: darken($color, 15%);
  // border-bottom: 1px solid $color;
}

</style>

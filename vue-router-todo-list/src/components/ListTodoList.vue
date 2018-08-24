<template>
  <div class="list-todo-list">
    <div class="box-title">
      <h1 class="title">TodoList</h1>
    </div>
    <div class="list">
      <ul>
        <ItemListTodoList
          v-for="item in list"
          :key="item.id"
          :item="item"
          v-on:checkItem="handleCheckItem" />
      </ul>
    </div>
    <div class="box-button-add">
      <router-link to="/list/new">
        <font-awesome-icon icon="plus"></font-awesome-icon>
      </router-link>
    </div>
  </div>
</template>

<script>

import ItemListTodoList from '@/components/ItemListTodoList'

export default {
  name: 'ListTodoList',
  components: {
    ItemListTodoList
  },
  mounted () {
    const list = window.localStorage.getItem('list')
    if (list) {
      this.list = JSON.parse(list)
    }
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    handleCheckItem: function (data) {
      const index = this.list.findIndex(item => item.id === data.id)
      this.list[index].finalized = data.finalized
      window.localStorage.setItem('list', JSON.stringify(this.list))
    }
  }
}
</script>

<style scoped>

</style>

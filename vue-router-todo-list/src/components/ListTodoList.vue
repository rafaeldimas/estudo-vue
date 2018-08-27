<template>
  <main class="section list-todo-list">
    <div class="container">
      <h1 class="has-text-centered title">TodoList</h1>
      <div class="columns is-tablet is-multiline">
        <ItemListTodoList
          v-for="item in list"
          :key="item.id"
          :item="item"
          v-on:checkItem="handleCheckItem"
          v-on:removeItem="handleRemoveItem" />
      </div>
      <div class="box-button-add">
        <router-link to="/list/new" class="button is-primary is-rounded">
          <font-awesome-icon icon="plus"></font-awesome-icon>
        </router-link>
      </div>
    </div>
  </main>
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
    getIndexItemList: function (id) {
      return this.list.findIndex(item => item.id === id)
    },
    handleCheckItem: function (data) {
      const index = this.getIndexItemList(data.id)
      this.list[index].finalized = data.finalized
      window.localStorage.setItem('list', JSON.stringify(this.list))
    },
    handleRemoveItem: function (data) {
      const index = this.getIndexItemList(data.id)
      delete this.list[index]
      this.list = this.list.filter(item => !!item)
      window.localStorage.setItem('list', JSON.stringify(this.list))
    }
  }
}
</script>

<style scoped lang="scss">
.list-todo-list .box-button-add .button {
  padding: 2em 1.5em;
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>

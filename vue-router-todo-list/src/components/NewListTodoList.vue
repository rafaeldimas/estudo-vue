<template>
  <div class="new-list-todo-list">
    <input type="text" name="name" id="name" v-model="name">
    <input type="date" name="deadline" id="deadline" v-model="deadline">
    <button id="button" v-on:click="handleSaveNewItemList">save</button>
  </div>
</template>

<script>
export default {
  name: 'NewListTodoList',
  data () {
    return {
      name: '',
      deadline: ''
    }
  },
  computed: {
    id: () => {
      const list = window.localStorage.getItem('list')

      return !list ? 0 : ++JSON.parse(list).length
    }
  },
  methods: {
    handleSaveNewItemList: function () {
      if (!this.name && !this.deadline) {
        return alert('Preencha todos os campos')
      }
      const item = { ...this.$data, id: this.id, finalized: false }
      const list = JSON.parse(window.localStorage.getItem('list') || '[]')
      list.push(item)
      window.localStorage.setItem('list', JSON.stringify(list))
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>

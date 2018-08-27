<template>
  <div class="new-list-todo-list">
    <input type="text" name="name" id="name" v-model="name">
    <textarea name="description" id="description" v-model="description"></textarea>
    <input type="date" name="deadline" id="deadline" v-model="deadline">
    <button id="button" v-on:click="handleSaveNewItemList">save</button>
  </div>
</template>

<script>
import hash from 'object-hash'

export default {
  name: 'NewListTodoList',
  data () {
    return {
      name: '',
      description: '',
      deadline: ''
    }
  },
  computed: {
    id: function () {
      return hash(this.$data)
    }
  },
  methods: {
    handleSaveNewItemList: function () {
      if (!this.name && !this.deadline) {
        return alert('Preencha todos os campos')
      }

      const vm = this
      const list = JSON.parse(window.localStorage.getItem('list') || '[]')

      if (list.findIndex(item => item.name === vm.name) !== -1) {
        return alert('Nome não pode repetir')
      }

      const item = { id: this.id, finalized: false, ...this.$data }

      list.push(item)

      window.localStorage.setItem('list', JSON.stringify(list))

      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <main class="section new-list-todo-list">
    <div class="container">
      <FormTodoList
        :dataError="errors"
        v-on:saveItemList="handleSaveNewItemList" />
    </div>
  </main>
</template>

<script>
import FormTodoList from '@/components/FormTodoList'

export default {
  name: 'NewListTodoList',
  components: { FormTodoList },
  data () {
    return {
      errors: []
    }
  },
  methods: {
    handleSaveNewItemList: function (data) {
      this.errors = []
      if (!data.name || !data.description || !data.deadline) {
        return this.errors.push('Preencha todos os campos')
      }

      const list = JSON.parse(window.localStorage.getItem('list') || '[]')

      if (list.findIndex(item => item.id === data.id) !== -1) {
        return this.errors.push('Não é possivel salvar um item exatamente igual.')
      }

      const item = { ...data, finalized: false }

      list.push(item)

      window.localStorage.setItem('list', JSON.stringify(list))

      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>

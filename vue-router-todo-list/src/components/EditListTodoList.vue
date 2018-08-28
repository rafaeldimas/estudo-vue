<template>
  <main class="section edit-list-todo-list">
    <div class="container">
      <FormTodoList
        :dataItem="dataItem"
        v-on:saveItemList="handleSaveEditedItemList" />
    </div>
  </main>
</template>

<script>
import FormTodoList from '@/components/FormTodoList'

export default {
  name: 'EditListTodoList',
  components: { FormTodoList },
  computed: {
    dataItem: function () {
      const list = JSON.parse(window.localStorage.getItem('list') || '[]')
      return list.find(item => item.id === this.$route.params.id)
    }
  },
  methods: {
    handleSaveEditedItemList: function (data) {
      const list = JSON.parse(window.localStorage.getItem('list') || '[]')
      const itemIndex = list.findIndex(item => item.id === this.dataItem.id)

      const item = Object.assign({}, list[itemIndex], { ...data })

      list[itemIndex] = item

      window.localStorage.setItem('list', JSON.stringify(list))

      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>

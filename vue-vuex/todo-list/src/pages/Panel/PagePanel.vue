<template>
  <div class="page-panel">
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'PagePanel',
  components: { TodoList }
}
</script>

<style lang="scss" scoped>

</style>

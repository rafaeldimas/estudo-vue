<template>
  <div class="todo-list">
    <TodoItem />
  </div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  name: 'TodoList',
  components: { TodoItem }
}
</script>

<style lang="scss" scoped>

</style>

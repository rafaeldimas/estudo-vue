<template>
  <div class="page-panel">
    <Notification />
    <TodoList />
  </div>
</template>

<script>
/* Components */
import Notification from '@/shared/Notification'
import TodoList from './components/TodoList'

export default {
  name: 'PagePanel',
  components: { TodoList, Notification }
}
</script>

<style lang="scss" scoped>

</style>

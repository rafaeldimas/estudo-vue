<template>
  <div id="app">
    <TodoList/>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'

export default {
  name: 'App',
  components: {
    TodoList
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  #app {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
</style>

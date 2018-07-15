<template>
  <tr class="todo-list-item">
    <td>{{ item.name }}</td>
    <td>{{ item.createdAt }}</td>
    <td>{{ item.deadline }}</td>
    <td>{{ item.status }}</td>
  </tr>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: ['item']
}
</script>

<style scoped>
</style>

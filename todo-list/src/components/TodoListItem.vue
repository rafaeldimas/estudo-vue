<template>
  <tr class="todo-list-item">
    <td>{{ item.name }}</td>
    <td>{{ item.createdAt }}</td>
    <td>{{ item.deadline }}</td>
    <td><input type="checkbox" name="status" id="status" v-on:click="alterStatus(item.id)" :checked="item.status"></td>
  </tr>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: ['item'],
  methods: {
    alterStatus: function (id) {
      this.$emit('alterStatus', {
        'id': id,
        'status': !this.item.status
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.todo-list-item {
  border-bottom: 1px solid $color;
}

.todo-list-item:last-of-type {
  border-bottom: none;
}

.todo-list-item td {
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  color: darken($color, 30%);
  border-left: 1px solid $color;
}

.todo-list-item td:first-of-type {
  border-left: none;
}

</style>

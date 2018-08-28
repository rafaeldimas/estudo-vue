<template>
  <div class="column is-3">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ item.name }}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <p>{{ item.description }}</p>
          <time :datetime="item.deadline">{{ deadlineFormated }}</time>
        </div>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item" :class="getStatusClass" v-on:click="handleCheckItem(item.id)" title="Finalizar">
          <font-awesome-icon :icon="['far', 'check-circle']"></font-awesome-icon>
        </a>
        <router-link :to="`/list/${item.id}`" class="card-footer-item" title="Editar">
          <font-awesome-icon :icon="['far', 'edit']"></font-awesome-icon>
        </router-link>
        <a class="card-footer-item" title="Excluir" v-on:click="handleRemoveItem(item.id)">
          <font-awesome-icon :icon="['far', 'times-circle']"></font-awesome-icon>
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemListTodoList',
  props: ['item'],
  computed: {
    deadlineFormated: function () {
      return (new Date(`${this.item.deadline} 00:00:00`)).toLocaleDateString()
    },
    getStatusClass: function () {
      return !this.item.finalized ? '' : 'has-text-white has-background-primary'
    }
  },
  methods: {
    handleCheckItem: function (id) {
      this.$emit('checkItem', {
        id,
        'finalized': !this.item.finalized
      })
    },
    handleRemoveItem: function (id) {
      this.$emit('removeItem', { id })
    }
  }
}
</script>

<style lang="sass" scoped>

</style>

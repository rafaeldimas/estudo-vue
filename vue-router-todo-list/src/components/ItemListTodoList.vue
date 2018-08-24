<template>
  <div class="column">
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
        <router-link :to="'/list/' + item.name" class="card-footer-item" title="Editar">
          <font-awesome-icon :icon="['far', 'edit']"></font-awesome-icon>
        </router-link>
        <a class="card-footer-item" title="Excluir">
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
      return new Date(this.item.deadline).toLocaleDateString()
    },
    getStatusClass: function () {
      return !this.item.finalized ? '' : 'has-text-primary'
    }
  },
  methods: {
    handleCheckItem: function (id) {
      this.$emit('checkItem', {
        'id': id,
        'finalized': !this.item.finalized
      })
    }
  }
}
</script>

<style scoped>
/* .box-button-checked {
  cursor: pointer;
  color: #999;
}
.box-button-checked.active {
  color: #13c753;
} */
</style>

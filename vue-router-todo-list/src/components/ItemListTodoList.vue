<template>
  <li>
    <p class="box-button-checked" :class="getStatusClass" v-on:click="handleCheckItem(item.id)">
      <font-awesome-icon :icon="['far', 'check-circle']"></font-awesome-icon>
    </p>

    <p>{{ item.name }}</p>

    <time :datetime="item.deadline">{{ deadlineFormated }}</time>

    <router-link :to="'/list/' + item.name">
      <font-awesome-icon :icon="['far', 'edit']"></font-awesome-icon>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'ItemListTodoList',
  props: ['item'],
  data () {
    return {
      //
    }
  },
  computed: {
    deadlineFormated: function () {
      return new Date(this.item.deadline).toLocaleDateString()
    },
    getStatusClass: function () {
      return !this.item.finalized ? '' : 'active'
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
.box-button-checked {
  cursor: pointer;
  color: #999;
}
.box-button-checked.active {
  color: #13c753;
}
</style>

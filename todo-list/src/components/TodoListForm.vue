<template>
  <div class="form">
    <p v-if="error">{{ error }}</p>
    <input v-model="name" type="text" name="name" id="name">
    <input v-model="deadline" type="date" name="deadline" id="deadline">
    <button v-on:click="save">Salvar</button>
  </div>
</template>

<script>
export default {
  name: 'TodoListForm',
  data () {
    return {
      name: '',
      deadline: '',
      error: ''
    }
  },
  computed: {
    deadlineFormat: function () {
      return new Date(this.deadline).toLocaleDateString()
    },
    now: function () {
      return new Date().toLocaleDateString()
    }
  },
  methods: {
    save: function () {
      debugger;
      if (!this.name || !this.deadline) {
        return this.error = 'Preencha todos os campos'
      }
      this.$emit('updateList', {
        'name': this.name,
        'deadline': this.deadlineFormat,
        'createdAt': this.now,
        'status': false
      })

      this.clearForm()
    },
    clearForm: function () {
      this.name = ''
      this.deadline = ''
      this.error = ''
    }
  }
}
</script>

<style scoped>

</style>

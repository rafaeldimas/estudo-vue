<template>
  <div class="form">
    <p v-if="error">{{ error }}</p>
    <input v-model="name" autocomplete="off" type="text" name="name" id="name" placeholder="Tarefa">
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
      if (!this.name || !this.deadline) {
        this.error = 'Preencha todos os campos'
        return false
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

<style lang="scss" scoped>

.form {
  margin-top: 15px;
  margin-bottom: 15px;
}

.form input {
  padding: 5px 10px;
  height: 30px;
  color: darken($color, 15%);
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-bottom-color: $color;
  transition: all .5s;
}

.form button {
  position: relative;
  padding: 5px 15px;
  height: 30px;
  cursor: pointer;
  color: darken($color, 15%);
  transition: all .5s;
}

.form button:before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  width: 100%;
  height: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-bottom-color: $color;
  transition: all .5s;
}

.form input:focus {
  animation: cool-border 1s linear forwards;
  background-color: rgba($color, .07);
}

.form button:hover::before {
  animation: cool-border 1s linear forwards;
  background-color: rgba($color, .07);
}

@keyframes cool-border {
  0% { border-right-color: $color }
  50% { border-right-color: $color; border-top-color: $color; }
  100% { border-right-color: $color; border-top-color: $color; border-left-color: $color; }
}
</style>

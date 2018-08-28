<template>
  <div class="form-list-todo-list">

    <div class="message is-warning" v-if="errors.length">
      <div class="message-header">
        <p>Erros</p>
        <button class="delete" aria-label="delete" v-on:click="clearMessagens"></button>
      </div>
      <div class="message-body">
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>
    </div>

    <div class="field">
      <label class="label">Nome</label>
      <div class="control">
        <input type="text" class="input" v-model="item.name" placeholder="Nome">
      </div>
    </div>

    <div class="field">
      <label class="label">Descrição</label>
      <div class="control">
        <textarea class="textarea" v-model="item.description" placeholder="Descrição"></textarea>
      </div>
    </div>

    <div class="field">
      <label class="label">Finalizar até</label>
      <div class="control">
        <input type="date" class="input" v-model="item.deadline">
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary" v-on:click="handleSaveNewItemList">Salvar</button>
      </div>
      <div class="control">
        <button class="button is-text" v-on:click="goBack">Voltar</button>
      </div>
    </div>

  </div>
</template>

<script>
import hash from 'object-hash'

export default {
  name: 'FormTodoList',
  props: ['dataItem', 'dataError'],
  mounted () {
    if (this.dataItem) {
      this.item = { ...this.dataItem }
    }
    if (this.dataError) {
      this.errors = this.dataError
    }
  },
  data () {
    return {
      item: {
        name: '',
        description: '',
        deadline: (new Date()).toISOString().split('T')[0]
      },
      errors: []
    }
  },
  computed: {
    getHashId: function () {
      return hash(this.item)
    }
  },
  watch: {
    dataItem () {
      this.item = { ...this.dataItem }
    },
    dataError () {
      this.errors = this.dataError
    }
  },
  methods: {
    handleSaveNewItemList: function () {
      this.$emit('saveItemList', Object.assign({}, this.item, { id: this.getHashId }))
    },
    goBack: function () {
      this.$router.go(-1)
    },
    clearMessagens: function () {
      this.errors = []
    }
  }
}
</script>

<style scoped>

</style>

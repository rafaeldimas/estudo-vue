<template>
  <div class="form-list-todo-list">

    <div class="field">
      <label class="label">Nome</label>
      <div class="control">
        <input type="text" :class="getClassStatus(item.name.valid)" class="input" v-model="item.name.value" placeholder="Nome">
      </div>
      <p class="help" :class="getClassStatus(item.name.valid)">{{ item.name.message }}</p>
    </div>

    <div class="field">
      <label class="label">Descrição</label>
      <div class="control">
        <textarea class="textarea" :class="getClassStatus(item.description.valid)" v-model="item.description.value" placeholder="Descrição"></textarea>
      </div>
      <p class="help" :class="getClassStatus(item.description.valid)">{{ item.description.message }}</p>
    </div>

    <div class="field">
      <label class="label">Finalizar até</label>
      <div class="control">
        <input type="date" :class="getClassStatus(item.deadline.valid)" class="input" v-model="item.deadline.value">
      </div>
      <p class="help" :class="getClassStatus(item.deadline.valid)">{{ item.deadline.message }}</p>
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
  props: ['data'],
  mounted () {
    if (this.data) {
      this.item = this.data
    }
  },
  data () {
    return {
      item: {
        name: {
          value: '',
          valid: 'no-proccessed',
          message: ''
        },
        description: {
          value: '',
          valid: 'no-proccessed',
          message: ''
        },
        deadline: {
          value: (new Date()).toISOString().split('T')[0],
          valid: 'no-proccessed',
          message: ''
        }
      }
    }
  },
  computed: {
    id: function () {
      return hash(this.$data)
    }
  },
  methods: {
    handleSaveNewItemList: function () {
      this.$emit('saveItemList', { id: this.id, ...this.item })
    },
    goBack: function () {
      this.$router.go(-1)
    },
    getClassStatus: function (valid) {
      const classNameByStatus = {
        'no-proccessed': '',
        'valid': 'is-success',
        'invalid': 'is-danger'
      }
      return classNameByStatus[valid]
    }
  }
}
</script>

<style scoped>

</style>

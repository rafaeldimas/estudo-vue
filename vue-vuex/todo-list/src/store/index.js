import Vue from 'vue'
import Vuex from 'vuex'

/* Modules */
import auth from './modules/auth'
import todo from './modules/todo'
import loading from './modules/loading'
import notification from './modules/notification'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    todo,
    loading,
    notification
  },
  strict: debug
})

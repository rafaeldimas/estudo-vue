import Vue from 'vue'
import Vuex from 'vuex'

/* Modules */
import user from './modules/user'
import todo from './modules/todo'
import notification from './modules/notification'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    todo,
    notification
  },
  strict: debug
})

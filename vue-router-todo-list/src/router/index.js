import Vue from 'vue'
import Router from 'vue-router'
import ListTodoList from '@/components/ListTodoList'
import NewListTodoList from '@/components/NewListTodoList'
import EditListTodoList from '@/components/EditListTodoList'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'ListTodoList', component: ListTodoList },
    { path: '/list/new', name: 'NewListTodoList', component: NewListTodoList },
    { path: '/list/:id', name: 'EditListTodoList', component: EditListTodoList }
  ],
  mode: 'history'
})

import store from '@/store'

const afterEach = () => {
  setTimeout(() => store.dispatch('loading/setStatus', false), 1500)
}

export default afterEach

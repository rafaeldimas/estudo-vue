<template>
  <div class="page-login columns is-desktop is-vcentered">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from './components/LoginForm'

export default {
  name: 'PageLogin',
  components: { LoginForm }
}
</script>

<style lang="scss" scoped>

</style>

<style lang="scss">
.PageLogin {
  height: 100vh;
  background: radial-gradient(farthest-corner at 200px 200px, #f07963, #78346F, #0e1070);
  background-size: 200% 200%;
  animation: PageLogin 10s ease infinite;
}

@keyframes PageLogin {
    0%{background-position:97% 0%}
    50%{background-position:4% 100%}
    100%{background-position:97% 0%}
}
</style>

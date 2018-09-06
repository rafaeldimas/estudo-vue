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
body {
  height: 100vh;
  background-image: url(https://picsum.photos/1400/1000);
  background-repeat: no-repeat;
  background-size: cover;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.3);
  }
}
</style>

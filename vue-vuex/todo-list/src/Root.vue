<template>
  <section class="section" :class="$route.name">
    <div class="container">
      <router-view/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Root'
}
</script>

<style lang="scss" src="./assets/scss/app.scss"></style>

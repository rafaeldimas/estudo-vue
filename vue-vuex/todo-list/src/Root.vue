<template>
  <transition name="fade">
    <Loading v-if="isLoading" />
    <section class="section" :class="$route.name" v-else>
      <div class="container">
        <router-view/>
      </div>
    </section>
  </transition>
</template>

<script>
/* Helpers */
import { mapGetters } from 'vuex'

/* Components */
import Loading from '@/shared/Loading'

export default {
  name: 'Root',
  components: { Loading },
  computed: {
    ...mapGetters({
      'isLoading': 'loading/isLoading'
    })
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  height: 0;
}
</style>

<style lang="scss" src="./assets/scss/app.scss"></style>

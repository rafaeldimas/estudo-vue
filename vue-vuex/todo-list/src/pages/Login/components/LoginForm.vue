<template>
  <div class="login-form column is-8-tablet is-offset-2-tablet">

    <Notification />

    <form v-on:submit.prevent="submitLogin">

      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="text" v-model="username" placeholder="Username">
          <span class="icon is-small is-left">
            <font-awesome-icon icon="user"></font-awesome-icon>
          </span>
        </p>
      </div>

      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="email" v-model="email" placeholder="Email">
          <span class="icon is-small is-left">
            <font-awesome-icon icon="envelope"></font-awesome-icon>
          </span>
        </p>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" v-model="remenber">
            keep logged in
          </label>
        </div>
        <div class="control">
          <button class="button is-info">Cancel</button>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Notification from '@/shared/Notification'

export default {
  name: 'LoginForm',
  components: { Notification },
  data () {
    return {
      username: 'Bret',
      email: 'Sincere@april.biz',
      remenber: false
    }
  },
  computed: {
    ...mapGetters({
      hasNotifications: 'notification/hasNotifications'
    })
  },
  methods: {
    submitLogin () {
      const { username, email, remenber } = this

      if (!username) {
        this.addNotificationWarning({
          header: 'Username requered',
          text: 'Enter username'
        })
      }

      if (!email) {
        this.addNotificationWarning({
          header: 'Email requered',
          text: 'Enter email'
        })
      }

      if (!this.hasNotifications) {
        this.login({ username, email, remenber }).then((data) => {
          if (data.status) {
            this.addNotificationSuccess({
              header: 'Login Success',
              text: 'Please wait while you are redirected.'
            })
            return setTimeout(() => this.$router.push('/panel'), 2000)
          }
          this.addNotificationDanger({
            header: 'Login failed',
            text: `${data.error.message} (Try again later)`
          })
        })
      }
    },
    ...mapActions({
      addNotificationSuccess: 'notification/addNotificationSuccess',
      addNotificationWarning: 'notification/addNotificationWarning',
      addNotificationDanger: 'notification/addNotificationDanger',
      login: 'user/login'
    })
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  padding: 5rem;
  background-color: rgba(250,250,250,0.7);
  border-radius: 1rem;

  @media only screen and (max-width: 767px) {
    padding: 1.5rem;
  }
}
</style>

<template>
  <div class="login-form column is-4 is-offset-4">

    <Notification />

    <form v-on:submit="login">

      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="text" placeholder="Username">
          <span class="icon is-small is-left">
            <font-awesome-icon icon="user"></font-awesome-icon>
          </span>
        </p>
      </div>

      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="email" placeholder="Email">
          <span class="icon is-small is-left">
            <font-awesome-icon icon="envelope"></font-awesome-icon>
          </span>
        </p>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox">
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
      username: '',
      email: '',
      remenber: false
    }
  },
  computed: {
    ...mapGetters({
      hasNotification: 'notification/hasNotifications'
    })
  },
  methods: {
    login () {
      const { username, email } = this

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

      if (this.hasNotification) {
        return
      }
    },
    ...mapActions({
      addNotificationSuccess: 'notification/addNotificationSuccess',
      addNotificationWarning: 'notification/addNotificationWarning',
      addNotificationDanger: 'notification/addNotificationDanger'
    })
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  padding: 5rem;
  background-color: rgba(250,250,250,0.7);
  border-radius: 1rem;
}
</style>

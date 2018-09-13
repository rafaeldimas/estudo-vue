<template>
  <div class="column is-full">
    <div class="box-form-login">

      <Notification />

      <div class="container-logo">
        <span class="line"></span>
        <div class="logo">
          <!-- In a real scenario would be used the logo of the application -->
          <font-awesome-icon :icon="['far', 'user']"></font-awesome-icon>
        </div>
        <span class="line"></span>
      </div>

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
            <button class="button is-info">Login</button>
          </div>
        </div>

      </form>
    </div>
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
        this.login({ username, email, remenber }).then((user) => {
          this.addNotificationSuccess({
            header: 'Login Success',
            text: `Welcome ${user.name}, please wait while you are redirected.`
          })
          setTimeout(() => this.resetNotifications() && this.$router.push('/panel'), 1500)
        }).catch((error) => {
          this.addNotificationDanger({
            header: 'Login failed',
            text: `${error.message} (Try again later)`
          })
        })
      }
    },
    ...mapActions({
      addNotificationSuccess: 'notification/addNotificationSuccess',
      addNotificationWarning: 'notification/addNotificationWarning',
      addNotificationDanger: 'notification/addNotificationDanger',
      resetNotifications: 'notification/resetNotifications',
      login: 'user/login'
    })
  }
}
</script>

<style lang="scss" scoped>
.box-form-login {
  margin: 0 auto;
  max-width: 500px;

  @media only screen and (max-width: 767px) {
    padding: 1.5rem;
  }

  .container-logo {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;

    .line {
      flex-grow: 0;
      width: 100%;
      height: 3px;
      background-color: rgba(230, 230, 230, .8);
    }

    .logo {
      flex-shrink: 0;
      width: 100px;
      height: 100px;
      color: rgba(230, 230, 230, .8);
      font-size: 2rem;
      text-align: center;
      line-height: 90px;
      border: 3px solid rgba(230, 230, 230, .8);
      border-radius: 50%;
    }
  }
}
</style>

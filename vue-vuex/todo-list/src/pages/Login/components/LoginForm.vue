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

        <div class="field input">
          <div class="icon">
            <font-awesome-icon :icon="['far', 'user']"></font-awesome-icon>
          </div>
          <input class="input" type="email" v-model="email" placeholder="E-mail" autocomplete="email">
        </div>

        <div class="field input">
          <div class="icon">
            <font-awesome-icon icon="lock"></font-awesome-icon>
          </div>
          <input class="input" type="password" v-model="password" placeholder="Password" autocomplete="current-password">
        </div>

        <div class="field button">
          <button class="button login" type="submit">Login</button>
        </div>

        <div class="field">
          <input type="checkbox" v-model="remenber" class="checkbox" id="remenber">
          <label for="remenber" class="label">keep logged in</label>
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
      email: '',
      password: '',
      remenber: true
    }
  },
  computed: {
    ...mapGetters({
      hasNotifications: 'notification/hasNotifications'
    })
  },
  methods: {
    submitLogin () {
      const { email, password, remenber } = this

      if (!email) {
        this.addNotificationWarning({
          header: 'Email requered',
          text: 'Enter email'
        })
      }

      if (!password) {
        this.addNotificationWarning({
          header: 'Password requered',
          text: 'Enter password'
        })
      }

      if (!this.hasNotifications) {
        this.login({ email, password, remenber }).then((user) => {
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
      login: 'auth/login'
    })
  }
}
</script>

<style lang="scss" scoped>
.box-form-login {
  margin: 0 auto;
  padding-bottom: 30px;
  max-width: 500px;
  border-bottom: 2px solid rgba(230, 230, 230, .8);

  @media only screen and (max-width: 767px) {
    padding: 1.5rem;
  }

  /* Init Style Logo */
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
      color: #fff;
      font-size: 2rem;
      text-align: center;
      line-height: 90px;
      border: 3px solid rgba(230, 230, 230, .8);
      border-radius: 50%;
    }
  }
  /* Finish Style Logo */

  /* Init Style Fields */
  .field {
    &.input {
      display: flex;
      align-items: stretch;
      margin: 20px 0;
      width: 100%;
      height: 50px;
      border: 2px solid #fff;
      border-radius: 5px;

      .icon {
        width: 50px;
        text-align: center;
        line-height: 50px;
        color: #fff;
        font-size: 1.1rem;
      }

      input {
        flex-grow: 1;
        padding: 0 20px;
        font-size: 1rem;
        font-weight: 600;
        background-color: #fff;
        border: none;
        outline: none;

        &::placeholder {
          color: #aaa;
        }
      }
    }

    /* Init Style Button Login */
    &.button {
      margin: 2px 0 30px;

      .login {
        width: 100%;
        min-height: 50px;
        color: #fff;
        text-transform: uppercase;
        font-size: 1.3rem;
        font-weight: 600;
        background-color: #fe5387;
        outline: none;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all .3s;

        &:hover {
          background-color: darken(#fe5387, 5) ;
          color: darken(#fff, 10);
        }
      }
    }
    /* Finish Style Button */
  }
  /* Finish Style Fields */

}
</style>

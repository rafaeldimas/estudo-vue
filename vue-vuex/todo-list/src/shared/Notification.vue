<template>
  <div class="notifications" v-show="hasNotifications">
    <div
      class="notification"
      :class="`is-${status}`"
      v-for="(notification, status) in notifications"
      :key="status"
      v-show="notification.messages.length">
        <button class="delete" v-on:click="removeNotificationsByStatus(status)"></button>
        <p class="message" v-for="message in notification.messages" :key="message.text">
          <strong>{{ message.header }}: </strong> {{ message.text }}
        </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Notification',
  computed: {
    ...mapGetters({
      notifications: 'notification/notifications',
      hasNotifications: 'notification/hasNotifications'
    })
  },
  methods: {
    ...mapActions({
      removeNotificationsByStatus: 'notification/removeNotificationsByStatus'
    })
  }
}
</script>
<style lang="scss" scoped>
.notifications {
  margin-bottom: 1.5rem;

  .notification {
    .message {
      background-color: inherit;
    }
  }
}
</style>

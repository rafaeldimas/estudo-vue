<template>
  <div class="notifications" v-show="hasNotifications">
    <div
      class="notification"
      :class="`is-${notification.status}`"
      v-for="notification in notifications"
      :key="notification.status"
      v-show="notification.messages.length">
        <button class="delete" v-on:click="removeNotificationsByStatus(notification.status)"></button>
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
  methos: {
    ...mapActions({
      removeNotificationsByStatus: 'notification/removeNotificationsByStatus'
    })
  }
}
</script>
<style lang="scss" scoped>
.message {
  background-color: inherit;
}
</style>

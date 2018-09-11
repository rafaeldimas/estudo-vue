import { sumBy } from 'lodash'

const notifications = state => state.notifications
const hasNotifications = state => sumBy(state.notifications, notification => notification.messages.length)

export default {
  notifications,
  hasNotifications
}

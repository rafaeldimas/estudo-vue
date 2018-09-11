import { reduce, isObject } from 'lodash'

const notifications = state => state.notifications
const hasNotifications = state => reduce(state.notifications, (acc, value) => (isObject(acc) ? acc.messages.length : acc) + value.messages.length, 0)

export default {
  notifications,
  hasNotifications
}

import { isObject, remove } from 'lodash'

const addNotificationByStatus = (state, { status, notification }) => {
  const statusIndex = state.notifications.findIndex(item => item.status === status)
  if (isObject(state.notifications[statusIndex])) {
    return state.notifications[statusIndex].messages.push(notification)
  }
  state.notifications[statusIndex] = { status, notification }
}

const removeNotificationsByStatus = (state, status) => remove(state.notifications, notification => notification.status === status)

export default {
  addNotificationByStatus,
  removeNotificationsByStatus
}

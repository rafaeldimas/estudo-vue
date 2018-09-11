import { isObject } from 'lodash'

const addNotificationByStatus = (state, { status, notification }) => {
  if (isObject(state.notifications[status])) {
    return state.notifications[status].messages.push(notification)
  }
  state.notifications[status] = { status, messages: [ notification ] }
}

const removeNotificationsByStatus = (state, status) => (state.notifications[status].messages = [])

export default {
  addNotificationByStatus,
  removeNotificationsByStatus
}

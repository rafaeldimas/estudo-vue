/* Add notification success */
const addNotificationSuccess = ({ commit }, notification) => commit('addNotificationByStatus', { status: 'success', notification })

/* Add notification warning */
const addNotificationWarning = ({ commit }, notification) => commit('addNotificationByStatus', { status: 'warning', notification })

/* Add notification danger */
const addNotificationDanger = ({ commit }, notification) => commit('addNotificationByStatus', { status: 'danger', notification })

/* Reset all notifications */
const resetNotifications = ({ commit }) => commit('resetNotifications')

/* Remove notifications by status */
const removeNotificationsByStatus = ({ commit }, status) => commit('removeNotificationsByStatus', status)

export default {
  addNotificationSuccess,
  addNotificationWarning,
  addNotificationDanger,
  resetNotifications,
  removeNotificationsByStatus
}

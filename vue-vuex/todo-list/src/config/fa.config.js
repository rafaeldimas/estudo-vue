import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPlus, faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { faUser as faUserRegular, faCheckCircle, faEdit, faTimesCircle } from '@fortawesome/free-regular-svg-icons'

library.add(
  faPlus,
  faUser,
  faEnvelope,
  faLock,
  faUserRegular,
  faCheckCircle,
  faEdit,
  faTimesCircle
)

export default FontAwesomeIcon

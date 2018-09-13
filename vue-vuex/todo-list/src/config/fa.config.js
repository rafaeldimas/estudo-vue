import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPlus, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUser as faUserRegular, faCheckCircle, faEdit, faTimesCircle } from '@fortawesome/free-regular-svg-icons'

library.add(
  faUser,
  faUserRegular,
  faEnvelope,
  faPlus,
  faCheckCircle,
  faEdit,
  faTimesCircle
)

export default FontAwesomeIcon

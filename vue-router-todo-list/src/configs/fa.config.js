import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle, faEdit, faTimesCircle } from '@fortawesome/free-regular-svg-icons'

library.add(
  faPlus,
  faCheckCircle,
  faEdit,
  faTimesCircle
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

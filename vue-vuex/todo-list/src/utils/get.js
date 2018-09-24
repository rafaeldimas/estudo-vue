import { get } from 'lodash'

export const getData = (object, defaultValue = undefined) => get(object, 'data', defaultValue)

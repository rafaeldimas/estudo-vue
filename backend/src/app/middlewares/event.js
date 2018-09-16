const EventsEmitter = require('../events')
const Listerners = require('../listeners')

module.exports = (req, res, next) => {
  try {
    Object.keys(Listerners).map(event => {
      if (!EventsEmitter[event]) return false

      Object.keys(Listerners[event]).map(listerner => {
        EventsEmitter[event].on(listerner, Listerners[event][listerner])
      })
    })
  } catch (error) {
    console.log(error)
  }
  next()
}

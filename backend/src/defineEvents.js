const EventsEmitter = require('./app/events')
const Listerners = require('./app/listeners')

module.exports = () => {
  try {
    Object.keys(Listerners).map(event => {
      if (!EventsEmitter[event]) return false

      Object.keys(Listerners[event]).map(listerner => {
        EventsEmitter[event].on(listerner, Listerners[event][listerner])
      })
    })
  } catch (error) {}
}

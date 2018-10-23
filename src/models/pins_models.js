const pinsQuery = require('../queries/pins_queries')

const fetchPins = () => {
  console.log('Hey!!!! I am model')
  let pins = pinsQuery.fetchPins()

  return pins.then(result => {
    return result.length < 1
      ? { error: 'error retrieving boardPins', status: 404 }
      : result
  })
}

const findPins = (id) => {
  console.log('Hey!!!! I am model')
  let pins = pinsQuery.findPins(id)

  return pins.then(result => {
    return !result
      ? { error: 'error retrieving Pins', status: 404 }
      : result
  })
}

const createPins = (payload) => {
  // console.log('Hey!!!! I am model')
  let pins = pinsQuery.createPins(payload)

  return pins.then(result => {
    return !result
      ? { error: 'error retrieving Pins', status: 404 }
      : result
  })
}

const updatePins = (payload, id) => { 
  // console.log('Hey!!!! I am model')
  let pins = PinsQuery.update_pins(payload, id)

  return pins.then(result => {
    console.log(result)
    return !result
      ? { error: 'error retrieving Pins', status: 404 }
      : result
  })
}

const delPins = (id) => {
  let pins = pinsQuery.delUPins(id)
  return pins.then(result => {
    return !result
      ? { error: 'error retrieving Pins', status: 404 }
      : result
  })
}

module.exports = {
    fetchPins,
    findPins,
    createPins,
    updatePins,
    delPins
  }
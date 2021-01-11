

const counter = (state = 0, actions) => {
  switch (actions.type) {
    case 'INCREMENT':
      return 8
    case 'DECREMENT':
      return state--
    default:
      return state
  }
}

export default counter

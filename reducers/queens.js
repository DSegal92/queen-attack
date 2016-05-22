const queen = (state, action) => {
  switch (action.type) {
    case 'PLACE_QUEEN':
      return {
        x: action.x,
        y: action.y
      }
    default:
      return state
  }
}

const queens = (state = [], action) => {
  switch (action.type) {
    case 'PLACE_QUEEN':
      return [
        ...state,
        queen(undefined, action)
      ]
  default:
    return state
  }
}

export default queens

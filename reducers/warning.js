const warn = (state = [], action) => {
  switch (action.type) {
    case 'WARN':
      alert("YOU ONLY GET TWO QUEENS")
      return state
    default:
      return state
  }
}

export default warn

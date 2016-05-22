import { connect } from 'react-redux'
import { testAction } from '../actions'
import Board from '../components/Board'

const queenCoordinates = (queens) => {
  return queens.map( x => [x.x, x.y])
}

const attackStatus = (queens) => {
  if (queens.length < 2) {
    return 'Awaiting Placement'
  }
  else {
    var slope = (queens[1].y - queens[0].y) / (queens[1].x - queens[0].x)
    return attackMessage(slope)
  }
}

const attackMessage = (slope) => {
  if (Math.abs(slope) === Infinity || slope === 0 || Math.abs(slope) === 1) {
    return 'CAN ATTACK!!!!' }
    else {
      return 'YOU ARE BAD AT CHESS'
    }
}

const mapStateToProps = (state) => {
  return {
    queens: state.queens,
    coordinates: queenCoordinates(state.queens),
    canAttack: attackStatus(state.queens)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBoardClick: (x, y) => {
      dispatch(testAction(x,y))
    }
  }
}

const BoardConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default BoardConnect

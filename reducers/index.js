import { combineReducers } from 'redux'
import queens from './queens'
import warn from './warning'

const queenAttack = combineReducers({
  queens,
  warn
})

export default queenAttack

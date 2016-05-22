import React from 'react'
import Board from './board'
import BoardConnect from '../containers/BoardContainer'

const App = () => (
  <div>
    <h1 className="pageTitle">Queen Attack 2000</h1>
    <BoardConnect />
  </div>
)

export default App

import React from 'react'

const Cell = ({queen, onClick}) => (
  <div>
    <div className="boardCell"
         onClick={onClick}>
      <p>{queen == true ? 'Q' : ''}</p>
    </div>
  </div>
)

export default Cell

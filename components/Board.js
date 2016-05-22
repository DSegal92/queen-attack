import React, { Component } from 'react'
import Cell from './Cell'

export default class Board extends Component {
  containsQueen(x,y){
    if ( this.props.coordinates.filter(i => (i[0] === x && i[1] === y))[0]){
      return true
    }
    else{
      return false
    }
  }
  render() {
    var boardX= [0,1,2,3,4,5,6,7]
    var boardY= [0,1,2,3,4,5,6,7]

    return(
      <div>
        <p> { this.props.canAttack } </p>
        <table className="testBoard">
          <tbody>
            { boardX.map(x =>
                <tr key={x}>{
                  boardY.map(y =>
                    <td key={x+","+y}>
                      <Cell key={x+","+y}
                            x={x}
                            y={y}
                            queen={this.containsQueen(x,y)}
                            onClick={() => this.props.onBoardClick(x,y)} />
                    </td>
                  )
                }
              </tr>
            )}
           </tbody>
        </table>
      </div>
    )
  }
}

 export default Board

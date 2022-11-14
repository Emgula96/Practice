import React from 'react'
import { useState } from 'react'
import './TicTacToe.css'

const TitTacToe = () => {
    const [turn, setTurn] = useState('X')
    const [cells, setCells] = useState(Array(9).fill(''))
    const [winner, setWinner] = useState()
    const handleReset = () => {
        setWinner(null)
        setCells(Array(9).fill(""));
    }
    const checkWinner = (squares) => {
        let combos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagnol: [
                [0, 4, 8],
                [2, 4, 6],
            ]
        };
        for (let combo in combos) {
            combos[combo].forEach((pattern) => {
                console.log(squares[pattern[0]])
                console.log(squares[pattern[1]])
                console.log(squares[pattern[2]])
                console.log(combo)
                console.log(combos)
                if (
                    squares[pattern[0]] === '' ||
                    squares[pattern[1]] === '' ||
                    squares[pattern[2]] === '' 
                ) { }
                else if (squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
                ) {
                    setWinner(squares[pattern[0]])
                }
            });
        }
    }
    
    
    const Cell = ({ num }) => {
        return <td onClick={() => handleClick(num)}>{cells[num]}</td>
    }

//handle click of cell
    const handleClick = (num) => {
        if (cells[num] !== '' ){
            alert('Space taken');
            return;
        }
        let squares = [...cells]
        if (turn === 'X') {
            squares[num] = 'X'
            setTurn('O')
        }
        else {
            squares[num] = 'O'
            setTurn('X')
        }
        checkWinner(squares)
        setCells(squares)
        console.log(squares)
    }

    return (
      <>
        <h1>TIC TAC TOE</h1>
        <div className="container">
                <table>
                    Turn: {turn}
            <tbody>
              <tr>
                <Cell num={0} />
                <Cell num={1} />
                <Cell num={2} />
              </tr>
              <tr>
                <Cell num={3} />
                <Cell num={4} />
                <Cell num={5} />
              </tr>
              <tr>
                <Cell num={6} />
                <Cell num={7} />
                <Cell num={8} />
              </tr>
            </tbody>
                </table>
                {winner && (
                    <>
                        <p>{winner} is the winner!</p>
                        <button onClick={() => handleReset()}>Play Again</button>
                    </>
                )}
        </div>
      </>
    );
}

export default TitTacToe
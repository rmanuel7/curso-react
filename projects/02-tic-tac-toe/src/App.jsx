import { useState } from "react"
import { RowBoard } from "./RowBoard"

const TUNRS = { X: 'X', O: 'O' }
const COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [6, 4, 2],
    [0, 4, 8]
]

export function App() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(TUNRS.X)
    const [winner, setWinner] = useState(null)

    const updateBoard = (index) => 
    {
        if (board[index] || winner) return
        //! Update board
        let currentBoard = [...board]
        currentBoard[index] = turn
        setBoard(currentBoard)
        //! Change turn
        setTurn(TUNRS.X == turn ? TUNRS.O : TUNRS.X)
        //! Check has won 
        const newWinner = hasWon(currentBoard)
        if (newWinner) {
            document.getElementById('triggerWinner').click()
            setWinner(newWinner)
        }
    }

    const hasWon = (board) => 
    {
        for (const combination of COMBINATIONS) {
            const [a, b, c] = combination
            if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a]
        }
        return null
    }

    const reset = ()=>
    {
        setBoard(Array(9).fill(null))
        setTurn(TUNRS.X)
        setWinner(null)
    }
    return (
        <main className="d-flex flex-column align-items-center container-fluid gap-2 p-4 m-4">

            <h1 className="row align-items-center">Tic Tac Toe</h1>

            <section className="container text-center w-25">
                <div className="row row-cols-3">
                    {
                        board.map(
                            (_, key) => (
                                <RowBoard key={key} index={key} callback={updateBoard} value={_} />
                            )
                        )
                    }
                </div>
            </section>
            <section>
                <button className={`btn btn-otline-primary${turn == 'X' ? ' active' : ''}`}>
                    x
                </button>
                <button className={`btn btn-otline-primary${turn == 'O' ? ' active' : ''}`}>
                    o
                </button>
            </section>
            <section>

                <button type="button" id="triggerWinner" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="d-flex flex-column align-items-center mb-3">
                                    <div className="p-2">Gano:</div>
                                    <div className="p-2">
                                        <button className="btn border active">{winner}</button>
                                    </div>
                                    <div className="p-2">
                                        <button onClick={ reset } className="btn btn-outline-warning" data-bs-dismiss="modal">
                                            Reset
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}
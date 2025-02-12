import './board.css'
import { useState } from "react";
import Slot from "../slot/slot";
import WinnerChecker from "../winnerChecker/winnerChecker";
import ResetGameButton from "../buttons/restartButton/restartButton";
import GameRulesButton from '../buttons/gameRulesButton/gameRulesButton';
import GameRulesModal from '../gameRulesModal/gameRulesModal';
import Confetti from 'react-confetti'

const Board = () => {
    const [board, setBoard] = useState([
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
    ]);

    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState(null);
    const [cellsLeft, setCellsLeft] = useState(42);
    const [hoveredColumn, setHoveredColumn] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const clickHandle = (rowIndex, colIndex) => {
        if (winner) {
            return;
        }
        // should i add: || colIndex === null

        // console.log(`Clicked on row: ${rowIndex}, col: ${colIndex}`);
        for (let row = 5; row >= 0; --row) {
            if (!board[row][colIndex]) {
                setBoard(prev => {
                    const boardCopy = prev.map(row => [...row]);
                    boardCopy[row][colIndex] = currentPlayer;
                    const gameWinner = WinnerChecker(boardCopy);
                    if (gameWinner) {
                        setWinner(gameWinner);
                    }
                    return boardCopy;
                });

                setCurrentPlayer(prev => (prev === 'X' ? 'O' : 'X'));
                setCellsLeft(cellsLeft - 1);
                break;
            }
        }
        // return WinnerChecker(board); should I remove this line?
    };


    const isColumnPlayable = (colIndex) => {
        return board[0][colIndex] === '';
    };

    const getCellClass = (colIndex) => {
        if (hoveredColumn === colIndex && isColumnPlayable(colIndex) && !winner) {
            return currentPlayer === 'X' ? 'HoverRed' : 'HoverYellow';
        }
        return '';
    };

    const resetGame = () => {
        setBoard([
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
        ]);
        setCurrentPlayer('X');
        setWinner(null);
        setCellsLeft(42);
        setHoveredColumn(null);
    }

    return (
        <>
            <div className="WinnerContainer">
                {winner &&
                    <h2 className="Result">🎉 {winner === 'X' ? 'Red' : 'Yellow'} Wins! 🎉
                        <Confetti />
                    </h2>}
                {!!!cellsLeft && <h2 className="Result">Tie</h2>}
            </div>
            <div
                className="Board"
                onMouseLeave={() => setHoveredColumn(null)}>
                {board.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <Slot
                            key={`${rowIndex}-${colIndex}`}
                            className={`Cell ${getCellClass(colIndex)}`}
                            onClick={() => clickHandle(rowIndex, colIndex)}
                            onMouseEnter={() => setHoveredColumn(colIndex)}
                            cell={cell}
                        />
                    ))
                )}
            </div>
            <ResetGameButton resetGame={resetGame} />
            <GameRulesButton showRules={() => { setShowModal(true); setWinner(null); }} />
            <GameRulesModal isVisible={showModal} onClose={() => setShowModal(false)} />

        </>
    );
}
export default Board;
import '../buttons.css'

const ResetGameButton = ({ resetGame }) => {

    return <button className="RestartButton" onClick={resetGame}>
        Restart Game
    </button>
};

export default ResetGameButton;
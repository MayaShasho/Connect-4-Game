import './gameRulesModal.css';

const GameRulesModal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="Modal">
            <div className="ModalContent">
                <span className="Close" onClick={onClose}>
                    &times;
                </span>
                <h3>Game Rules</h3>
                <p>
                    Connect Four is a two-player board game where players take turns dropping discs into a grid.
                </p>
                <p>
                    The goal is to connect four discs of the same color in a row, either horizontally, vertically, or diagonally.
                </p>
                <p>Player 1 is Red and Player 2 is Yellow.</p>
                &nbsp;
                <p>The game ends when one player wins or when all slots are filled without a winner, resulting in a tie.</p>
            </div>
        </div>
    );
};

export default GameRulesModal;

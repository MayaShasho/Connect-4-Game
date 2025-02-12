import '../buttons.css'

const GameRulesButton = ({ showRules }) => {
    return <button
        className="GameRulesButton"
        onClick={showRules}>
        Game Rules
    </button>
};


export default GameRulesButton;
import './slot.css';
import redToken from "../../assets/player1disc.svg"
import blackToken from "../../assets/player2disc.svg"

const Slot = ({ key, className, onClick, onMouseEnter, cell }) => {
    return (
        <div
            key={key}
            className={className}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
        >
            {cell && <img className="Token" alt='' src={cell === 'X' ? redToken : blackToken} />}
        </div>
    );
};

export default Slot;
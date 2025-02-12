import './winnerChecker.css'

const WinnerChecker = (board) => {
    const directions = [
        [0, 1],  // → Right
        [1, 0],  // ↓ Down
        [1, 1],  // ↘ Diagonal Right-Down
        [1, -1]  // ↙ Diagonal Left-Down
    ];

    const isWinningSequence = (r, c, dr, dc) => {
        const token = board[r][c];
        if (!token) return false;

        for (let i = 1; i < 4; i++) {
            const nr = r + dr * i;
            const nc = c + dc * i;
            if (nr < 0 || nr >= 6 || nc < 0 || nc >= 7 || board[nr][nc] !== token) {
                return false;
            }
        }
        return true;
    };

    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
            for (const [dr, dc] of directions) {
                if (isWinningSequence(row, col, dr, dc)) {
                    return board[row][col];
                }
            }
        }
    }

    return null;
};


export default WinnerChecker;
// Get the HTML elements representing the game board and status display
const boardElement = document.getElementById('board');
const statusElement = document.getElementById('status');

// Initialize the board as an empty array of 9 elements representing the game cells
let board = ['', '', '', '', '', '', '', '', ''];

// Set the initial player to 'X' (the first player)
let currentPlayer = 'X';

// A flag to keep track of whether the game is ongoing
let gameActive = true;

/**
 * Handle the click event on a game cell.
 * @param {Event} event - The click event object.
 * @param {number} index - The index of the clicked cell.
 */
function handleClick(event, index) {
    // Ignore clicks if the cell is already filled or the game is over
    if (board[index] !== '' || !gameActive) return;

    // Update the board with the current player's move
    board[index] = currentPlayer;
    // Display the current player's mark (X or O) in the clicked cell
    event.target.textContent = currentPlayer;

    // Check if the current player has won
    if (checkWin()) {
        // Display a win message and stop the game
        statusElement.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    // Check if the board is full and declare a draw if it is
    if (isBoardFull()) {
        // Display a draw message and stop the game
        statusElement.textContent = 'Draw!';
        gameActive = false;
        return;
    }

    // Switch the current player to the other one ('X' to 'O' or 'O' to 'X')
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    // Update the status to indicate the next player's turn
    statusElement.textContent = `Player ${currentPlayer}'s turn`;
}

/**
 * Check if the current player has won by checking all possible win patterns.
 * @returns {boolean} True if the current player has won, otherwise false.
 */
function checkWin() {
    // Define all possible winning combinations (rows, columns, and diagonals)
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    // Loop through each win pattern
    for (let i = 0; i < winPatterns.length; i++) {
        const pattern = winPatterns[i];
        const a = pattern[0];
        const b = pattern[1];
        const c = pattern[2];

        // If all three cells in the pattern contain the current player's symbol, return true
        if (board[a] === currentPlayer && board[b] === currentPlayer && board[c] === currentPlayer) {
            return true;
        }
    }

    // If no win pattern is satisfied, return false
    return false;
}

/**
 * Check if the game board is completely filled.
 * @returns {boolean} True if all cells are filled, otherwise false.
 */
function isBoardFull() {
    // Loop through the board and check if any cell is empty
    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            // If any cell is still empty, return false
            return false;
        }
    }
    // If all cells are filled, return true
    return true;
}

/**
 * Reset the game state to start a new game.
 */
function resetGame() {
    // Reset the board to its initial empty state
    board = ['', '', '', '', '', '', '', '', ''];
    // Set the current player back to 'X'
    currentPlayer = 'X';
    // Reactivate the game
    gameActive = true;
    // Update the status to show that it's Player X's turn
    statusElement.textContent = `Player ${currentPlayer}'s turn`;

    // Clear the board in the UI
    clearBoard();
    // Re-create the board for a new game
    createBoard();
}

/**
 * Remove all cells from the board in the UI.
 */
function clearBoard() {
    // While the board has child elements (cells), remove them
    while (boardElement.firstChild) {
        boardElement.removeChild(boardElement.firstChild);
    }
}

/**
 * Create the game board in the UI by adding 9 clickable cells.
 */
function createBoard() {
    // Loop through 9 times to create 9 cells
    for (let i = 0; i < 9; i++) {
        // Create a new div element to represent a cell
        const cellElement = document.createElement('div');
        // Add the class "cell" to the div for styling
        cellElement.className = "cell";
        // Add a click event listener to the cell, passing its index to handleClick
        cellElement.addEventListener('click', (event) => handleClick(event, i));
        // Append the cell to the board element in the UI
        boardElement.appendChild(cellElement);
    }
}

// Initialize the board UI and set the status to Player X's turn when the game starts
createBoard();
statusElement.textContent = `Player ${currentPlayer}'s turn`;

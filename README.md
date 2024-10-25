# Tic-Tac-Toe

A modern, responsive Tic-Tac-Toe game built with **JavaScript**, **HTML**, and **CSS**, enhanced with **Bootstrap** for a sleek design. The game also includes a **dark/light mode toggle** for a customizable user experience.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Demo
Check out a live demo of the game here: [Tic-Tac-Toe Live Demo](https://mikaelengvall.github.io/TicTacToe/)

(Supply a live demo link here if hosted, e.g., on GitHub Pages)

## Features
- **Responsive design**: Built with Bootstrap, the game scales well across devices.
- **Dark/Light Mode Toggle**: Switch between dark and light modes for a personalized experience.
- **Persistent Mode Preference**: Your last dark/light mode setting is remembered across sessions.
- **Interactive UI**: Hover effects, easy-to-read status updates, and a reset button for quick replay.
- **No external libraries** required other than Bootstrap for styling.

## Technologies Used
- **JavaScript (ES6)**: Core game logic and functionality.
- **HTML5**: Structure of the game.
- **CSS3**: Custom styles for the game board and cells.
- **Bootstrap 5**: Used for layout, buttons, and responsive design.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/tic-tac-toe.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd tic-tac-toe
   ```
3. **Open the <code>index.html</code> file in your browser**:
   ```bash
   open index.html
   ```
   Or, just drag the <code>index.html</code> file into your browser window.
   
No additional dependencies are required, as this project is fully static (HTML, CSS, JS).

## How to Play
1. Click on any of the empty cells to mark it with your symbol (`X` or `O`).
2. Alternate between players until someone wins or the board is full.
3. The current player's turn is displayed at the top of the board.
4. If a player wins, the game will announce the winner and disable further moves.
5. If the board is full without a winner, the game will declare a draw.
6. Press the **Reset Game** button to start a new round.
7. Use the **Toggle Dark Mode** button to switch between light and dark themes.

### Winning Patterns
- Any row, column, or diagonal with the same symbol wins the game.

### Customization
- **Dark/Light Mode**: You can toggle between modes using the "Toggle Dark Mode" button. The preference is stored in `localStorage` and persists even after you close the browser.
- **Styling**: You can customize the appearance further by modifying the `style.css` file.
- **Game Board Size**: Currently, the board is 3x3, but you can expand or modify the grid size by updating the `createBoard()` function in `script.js`.

### Contributing
Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

### License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.



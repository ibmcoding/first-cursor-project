# Tic Tac Toe Game

A simple React tic-tac-toe game built with Vite.

## Features

- Classic 3x3 tic-tac-toe gameplay
- Turn-based gameplay (X goes first)
- Win detection for all possible winning combinations
- Draw detection when the board is full
- Reset game functionality
- Modern, responsive UI with hover effects
- Dark/light theme support

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system.

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## How to Play

1. Players take turns clicking on empty squares
2. X always goes first
3. Get three of your marks in a row (horizontally, vertically, or diagonally) to win
4. If all squares are filled and no one has won, it's a draw
5. Click "Reset Game" to start a new game

## Technologies Used

- React 18
- Vite
- CSS3 with Grid and Flexbox
- ESLint for code quality 
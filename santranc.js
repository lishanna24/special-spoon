const chessboard = document.getElementById('chessboard');

const initialBoard = [
  ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
  ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
  ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
];

// Satranç tahtasını oluştur
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.classList.add((row + col) % 2 === 0 ? 'light' : 'dark');
    square.dataset.row = row;
    square.dataset.col = col;

    const piece = initialBoard[row][col];
    if (piece) {
      const pieceElement = document.createElement('div');
      pieceElement.classList.add('piece');
      pieceElement.textContent = piece;
      pieceElement.draggable = true;
      pieceElement.addEventListener('dragstart', dragStart);
      square.appendChild(pieceElement);
    }

    square.addEventListener('dragover', dragOver);
    square.addEventListener('drop', drop);
    chessboard.appendChild(square);
  }
}

let draggedPiece = null;

function dragStart(event) {
  draggedPiece = event.target;
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  if (draggedPiece) {
    event.target.appendChild(draggedPiece);
    draggedPiece = null;
  }
}


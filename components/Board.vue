<template class="board-game">
  <div class="content-container">
    <h1 class="tic-tac-toe-logo">Tic Tac Toe</h1>
    <div class="score">
      <div class="player-x-score">Player X: {{ scores.X }} Player O: {{ scores.O }}</div>
    </div>
    <div class="status" :class="{ 'winner': winner === 'X', 'draw': !winner && cells.every(cell => cell !== '') }">{{ status }}</div>
    <div class="board">
      <div v-for="(cell, index) in cells" :key="index" @click="handleClick(index)">
        {{ cell }}
      </div>
    </div>
    <br>
    <div class="reset-button-container">
      <button @click="restartGame()" class="reset-button">RESET</button>
    </div>
  </div>
</template>

  <script lang="ts">
  import { defineComponent, ref} from 'vue'
  export default defineComponent({
    name: 'Board',
    setup() {
    useHead({
      link: [
        {
          rel: 'stylesheet',
          href: '/tttoe.css',
        }
      ]
  })
    },
    data() {
      return {
        cells: ref(Array(9).fill('')),
        xIsNext: ref(true),
        winner: ref(''),
        scores: ref({
          X: 0,
          O: 0,
        })
      }
    },
    computed: {
      status(): string {
        if (this.winner) {
          this.scores[this.winner as 'X' | 'O']++;
          return `Winner: ${this.winner}`
        } else if (this.cells.every((cell) => cell !== '')) {
          setTimeout(() => {
            this.restartGame();
          }, 300);
          return 'Draw! No winner.'
        } else {
          return `Next player: ${this.xIsNext ? 'X' : 'O'}`
        }
      },
    },
    methods: {
      handleClick(index: number): void {
  if (this.cells[index] || this.winner) {
    return;
  }

  this.cells[index] = this.xIsNext ? 'X' : 'O';

  if (this.calculateWinner()) {
    this.winner = this.calculateWinner();
    setTimeout(() => {
      this.restartGame();
    }, 300);
  } else {
    // Check for a draw
    if (this.cells.every((cell) => cell !== '')) {
      setTimeout(() => {
        this.restartGame();
      }, 300);
    } else {
      // Toggle the flag to control AI move
      this.xIsNext = false;

      // Make AI move after player's move
      setTimeout(() => {
        this.makeAIMove();
        // Toggle the flag back after AI move
        this.xIsNext = true;
      }, 500);
    }
  }
},

      calculateWinner(): string {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ]

        for (const line of lines) {
          const [a, b, c] = line
          if (this.cells[a] && this.cells[a] === this.cells[b] && this.cells[a] === this.cells[c]) {
            return this.cells[a]
          }
        }

        return ''
      },
      makeAIMove(): void {
  // Find empty cells
  const emptyCells = this.cells.map((cell, index) => (cell === '' ? index : -1)).filter((index) => index !== -1);
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const aiMove = emptyCells[randomIndex];

  // Set 'O' for the AI move
  this.cells[aiMove] = 'O';

  // Check for a winner after AI move
  if (this.calculateWinner() === 'O') {
    this.winner = 'O';
    setTimeout(() => {
      this.restartGame();
    }, 300);
  } else {
    this.xIsNext = true; // Toggle back to player's turn
  }
},
      restartGame(): void {
        this.cells = Array(9).fill('')
        this.xIsNext = true
        this.winner = ''
      },
    },

  });
  </script>

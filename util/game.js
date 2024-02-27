const cvs = document.getElementById("tetris");
const ctx = cvs.getContext("2d");
const scoreElements = document.getElementsByClassName("score");
const speedElement = document.getElementById("speed");
const homeElement = document.getElementById('home');
const gameOverElement = document.getElementById('game-over');

const ROW = 43;   // linha
const COL = 24;  // coluna
const SQ = 40;  //quadrado
const defaultColor = "#000000";

let isGameOver = false;
let isHomeScreen = true;
let canMove = true;
let speed = 500;
let dropStart = Date.now();
let score = 0;
let board = [];
let piece = randomPiece();

const startBtn = document.getElementById("startBtn");
const playAgainBtn = document.getElementById("playAgainBtn");
const quitBtn = document.getElementById("quitBtn");

startBtn.addEventListener('click', startGame);
playAgainBtn.addEventListener('click', resetGame);
quitBtn.addEventListener('click', quitGame);
document.addEventListener("keydown", CONTROL);

const scoreLabel = document.querySelector(".score");
const canvas = document.querySelector(".canvas");
const btnStart = document.querySelector('.start-game');
const btnRank = document.querySelector('.open-rank');
const btnAuth = document.querySelector('.open-auth');
const formAuth = document.querySelector('.auth-form');
const mainMenu = document.querySelector('.main-menu');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
formAuth.style.display = 'none';
//btnStart.style.display = 'none';
btnStart.addEventListener('click', startGame);
btnAuth.addEventListener('click', openAuth);
btnRank.addEventListener('click', openRank);

function startGame()
{
    mainMenu.style.display = 'none';
    gameState = gameStates.play;
    render();
}

function openAuth()
{
    mainMenu.style.display = 'none';
    formAuth.style.display = '';
}

function openRank()
{

}

const scoreLabel = document.querySelector(".score");
const canvas = document.querySelector(".canvas");
const btnStart = document.querySelector('.start-game');
const btnRank = document.querySelector('.open-rank');
const btnAuth = document.querySelector('.open-auth');
const btnRankExit = document.querySelector('.exit-rank');
const formAuth = document.querySelector('.auth-form');
const mainMenu = document.querySelector('.main-menu');
const rating = document.querySelector('.rating');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
formAuth.style.display = 'none';
rating.style.display = 'none';
//btnStart.style.display = 'none';
btnStart.addEventListener('click', startGame);
btnAuth.addEventListener('click', openAuth);
btnRank.addEventListener('click', openRank);
btnRankExit.addEventListener('click', exitRank);

function startGame()
{
    mainMenu.style.display = 'none';
    gameState = gameStates.play;
    render();
}

function openAuth()
{
    rating.style.display = 'none';
    mainMenu.style.display = 'none';
    formAuth.style.display = '';
}

function openRank()
{
    formAuth.style.display = 'none';
    mainMenu.style.display = 'none';
    rating.style.display = '';
}

function exitRank()
{
    formAuth.style.display = 'none';
    rating.style.display = 'none';
    mainMenu.style.display = '';
}

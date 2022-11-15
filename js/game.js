const scoreLabel = document.querySelector(".score");
const canvas = document.querySelector(".canvas");
let ctx = canvas.getContext('2d');

const btnStart = document.querySelector(".menu_start");
const btnRank = document.querySelector(".menu_auth");
const btnAuth = document.querySelector(".menu_rank");
const formAuth = document.querySelector(".auth");

//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;

// присваеваем и загружаем переменным картинки
const bg = new Image();
const pipeUp = new Image().src = "sprite/pipeW.png";
const pipeBottom = new Image().src = "sprite/pipel.png";

//инициализируем переменную игрока, ширина и высота спрайта игрока делим на  0.30 это 30% от высоты экрана для резиновой вёрстки
const player = new Player("sprite/bird.png" , canvas.height * 0.30, canvas.height * 0.30); //объявляем пустую переменную игрока

// переменные игры
const score = 0;


// class Pipe {
//
//   constructor(name) {
//     this.name = name;
//     type: ""
//     gap: 700
//   }
//
// }

const pipe =
[
   {
      x: canvas.width,
      y: 0
   }
];

window.addEventListener("load", function()
{
    bg.src = "sprite/bg.png";

    render();
});

document.onclick = function(e)
{
    player.jump();
}

// рисуем на экране обекты
function render()
{
    debugger;
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(player.sprite, player.x, player.y, player.width, player.height);
    player.fall(); // обект игрока под гравитациея

    for (let i = 0; i < pipe.length; i++)
    {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y, canvas.width * 0.10, canvas.height * 0.50);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap, canvas.width * 0.10, canvas.height * 0.50);

        pipe[i].x--;

        if ( pipe[i].x == -500 )
            score++;

        if ( pipe[i].x == 125 )
        {
            pipe.push({
                x: canvas.width,
                y: Math.floor( Math.random() * pipeUp.height ) - pipeUp.height
            });
        }
    }

    scoreLabel.innerHTML = "Счет: " + score;
    requestAnimationFrame(render);
}

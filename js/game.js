const scoreLabel = document.querySelector(".score");
const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
const scene = new Scene();
const player = new Player(canvas.height * 0.10, canvas.height * 0.10); //объявляем пустую переменную игрока
const pipeMananger = new PipeMananger(canvas);
const score = new ScoreController();

window.addEventListener("load", function()
{
     scene.setBackground("sprite/bg.png");
     render();
});

document.onclick = function(e)
{
    player.jump();
}

// рисуем на экране обекты
function render()
{
    ctx.drawImage(scene.background, 0, 0, canvas.width, canvas.height);
    player.fall(); // обект игрока под гравитациея
    ctx.drawImage(player.sprite, player.x, player.y, player.width, player.height);
    pipeMananger.checkAndDestroy();

    if( pipeMananger.checkAndCountInterval() )
        pipeMananger.create();

    for (let i = 0; i < pipeMananger.pipes.length; i++)
    {
        pipeMananger.pipes[i].move();

        if( pipeMananger.pipes[i].y <= pipeMananger.borderDestroy )
        {
           pipeMananger.pipes[i].destroy();
           score.increment();
           scoreLabel.innerHTML = score.render();
        }

        ctx.drawImage(
           pipeMananger.pipes[i].sprite,
           pipeMananger.pipes[i].x,
           pipeMananger.pipes[i].y,
           pipeMananger.pipes[i].width,
           pipeMananger.pipes[i].height
        );
    }

    requestAnimationFrame(render);
}

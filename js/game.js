const ctx = canvas.getContext('2d');
const scene = new Scene();
const player = new Player(canvas.height * 0.10, canvas.height * 0.10); //объявляем пустую переменную игрока
const pipeMananger = new PipeMananger(canvas);
const score = new ScoreController();
const gameStates = {
    'play' : 0,
    'pause' : 1,
    'win' : 2,
    'over' : 3
};

let gameState = gameStates['pause'];

window.addEventListener("load", function()
{
     scene.setBackground("sprite/bg.png");
     render();
});

document.onkeydown = function(e)
{
    if( e.keyCode == 38 ) // 40:down; 37:left; 39:right; 46:delete;
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

        if( pipeMananger.pipes[i].x <= pipeMananger.borderDestroy )
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

    if( gameState == gameStates.play )
        requestAnimationFrame(render);
}

class Game
{
    constructor( ui ) // конутруктор класса это стандартная функция которая выполняется когда создается класс через new
    {
        this.ui = ui;
        this.ctx =  this.ui.canvas.getContext('2d');
        this.scene = new Scene();
        this.player = new Player( this.ui.canvas.height * 0.10, this.ui.canvas.height * 0.10 ); //объявляем пустую переменную игрока
        this.pipeMananger = new PipeMananger( this.ui.canvas );
        this.score = new ScoreController();
        this.gameStates = {
            'play' : 0,
            'pause' : 1,
            'over' : 3
        };
        this.gameState = this.gameStates['pause'];
        this.counter = 0;
        this.ui.canvas.addEventListener( 'click', this.controlPlayer.bind( this ) );
    }

    controlPlayer( e )
    {
        this.player.jump();
    }

    // рисуем на экране обекты
    render()
    {
        this.ctx.drawImage(this.scene.background, 0, 0,  this.ui.canvas.width,  this.ui.canvas.height);
        this.player.fall(); // обект игрока под гравитациея
        this.ctx.drawImage(this.player.sprite, this.player.x, this.player.y, this.player.width, this.player.height);
        this.pipeMananger.checkAndDestroy();

        if( this.pipeMananger.checkAndCountInterval() )
            this.pipeMananger.create();

        for (let i = 0; i < this.pipeMananger.pipes.length; i++)
        {
            this.pipeMananger.pipes[i].move();

            if( this.pipeMananger.pipes[i].x <= this.pipeMananger.borderDestroy )
            {
               this.pipeMananger.pipes[i].destroy();
               this.score.increment();
               this.ui.scoreLabel.innerHTML = this.score.render();
            }

            this.ctx.drawImage(
               this.pipeMananger.pipes[i].sprite,
               this.pipeMananger.pipes[i].x,
               this.pipeMananger.pipes[i].y,
               this.pipeMananger.pipes[i].width,
               this.pipeMananger.pipes[i].height
            );
        }

        if( this.checkGameOver() )
            this.gameState = this.gameStates['over'];

        if( this.gameState == this.gameStates.play )
            window.requestAnimationFrame( this.render.bind(this) );
    }

    checkGameOver()
    {
        if( this.player.y < 0 || this.player.y + this.player.height > this.ui.canvas.height )
              return true;

        for (let i = 0; i < this.pipeMananger.pipes.length; i++)
            if( this.pipeMananger.pipes[i].collisionBox.checkInteract( this.player.collisionBox ) )
                return true;

        return false;
    }
}

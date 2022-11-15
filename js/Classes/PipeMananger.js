class PipeMananger
{
    counterSpawn = 0;

    constructor(canvas) // конутруктор класса это стандартная функция которая выполняется когда создается класс через new
    {
        this.pipes = []
        this.borderSpawn = canvas.width;
        this.borderDestroy = canvas.width * -0.20;
        this.intervalSpawn = 250;
        this.maxSpeed = 3;

        this.types =
        {
          up : 0,
          down : 1,
        };

        this.spriteUp = new Image();
        this.spriteDown = new Image();

        this.loadImages();
    }

    loadImages()
    {
      this.spriteUp.src = "sprite/pipeW.png";
      this.spriteDown.src = "sprite/pipel.png";
    }

    create()
    {
        let type = Math.floor( Math.random() * Object.keys( this.types ).length );
        let sprite = this.types.up == type ? this.spriteUp : this.spriteDown;
        let speed = Math.floor( Math.random() * this.maxSpeed ) + 1;
        let width = canvas.width * 0.05;
        let height = canvas.height * ( Math.random() * ( 0.80 - 0.20 ) + 0.20 );
        let x = this.borderSpawn;
        let y = this.types.up == type ? 0 : canvas.height - height;
        this.pipes.push( new Pipe( type, sprite, speed, width, height, x, y ) );
    }

    checkAndCountInterval()
    {
        if( this.counterSpawn >= this.intervalSpawn )
        {
           this.counterSpawn = 0;
           return true;
        }

        this.counterSpawn++;
        return false;
    }

    checkAndDestroy()
    {
        for ( let i = 0; i < this.pipes.length; i++ )
           if( this.pipes[i].x <= this.borderDestroy )
           {
              this.pipes[i].destroy();
              this.pipes.splice(i, 1);
           }
    }

    moveAll()
    {
        for ( let i = 0; i < this.pipes.length; i++ )
              this.pipes[i].move();
    }
}

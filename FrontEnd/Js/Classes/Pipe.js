class Pipe
{
    constructor(type, sprite, speed, width, height, x, y) // конутруктор класса это стандартная функция которая выполняется когда создается класс через new
    {
        //объявляем свойства класса
        this.type = type;
        this.sprite = sprite //создаём объект изображения, слово this стандартное для описания класса.
        this.width = width; //ширина спрайта игрока
        this.height = height; //высота спрайта игрока
        this.x = x; //позиция игрока по ширине
        this.y = y; //позиция игрока по высоте
        this.speed = speed;
        this.collisionBox = new CollisionBox( this.x, this.y, this.width, this.height );
    }

    move()
    {
        this.x -= this.speed;
        this.collisionBox.setPosition( this.x, this.y );
    }

    destroy()
    {
        delete this;
    }
}

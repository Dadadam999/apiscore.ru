class Pipe
{
    constructor(type, sprite, speed, width, height, x, y) // конутруктор класса это стандартная функция которая выполняется когда создается класс через new
    {
        //объявляем свойства класса
        this.sprite = sprite //создаём объект изображения, слово this стандартное для описания класса.
        this.width = width; //ширина спрайта игрока
        this.height = height; //высота спрайта игрока
        this.x = x; //позиция игрока по ширине
        this.y = y; //позиция игрока по высоте
        this.speed = speed;
    }

    move()
    {
      this.x - this.speed;
    }

    destroy()
    {
      delete this;
    }
}

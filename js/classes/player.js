class Player
{
    constructor(width, height) // конутруктор класса это стандартная функция которая выполняется когда создается класс через new
    {
        //объявляем свойства класса
        this.sprite = new Image(); //создаём объект изображения, слово this стандартное для описания класса.
        this.width = width; //ширина спрайта игрока
        this.height = height; //высота спрайта игрока
        this.x = 10; //позиция игрока по ширине
        this.y = 150; //позиция игрока по высоте
        this.weight = 1; // гравитация игрока
        this.hp = 1000; // жизни игрока
        this.jumpForce = 50; //сила с которой игрок прыгает вверх
        this.loadImage(); //загружем путь в объект изображения
    }

    loadImage() //функция загрузки изображения
    {
      this.sprite.src = "sprite/bird.png"; //приравниваем объекту изображения путь спрайта
    }

    fall() //функция снижения персонажа под гравитацией
    {
       this.y += this.weight;
    }

    jump() //функция прыжка персонажа вверх
    {
       this.y -= this.jumpForce;
    }
}

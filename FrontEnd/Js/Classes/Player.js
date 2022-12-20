class Player
{
    constructor(width, height) // конутруктор класса это стандартная функция которая выполняется когда создается класс через new
    {
        //объявляем свойства класса
        this.sprite = new Image(); //создаём объект изображения, слово this стандартное для описания класса.
        this.width = width; //ширина спрайта игрока
        this.height = height; //высота спрайта игрока
        this.x = 10; //позиция игрока по ширине
        this.y = 0; //позиция игрока по высоте
        this.weight = 2; // гравитация игрока
        this.hp = 2; // жизни игрока
        this.jumpForce = 30; //сила с которой игрок прыгает вверх
        this.collisionBox = new CollisionBox( this.x, this.y, this.width, this.height );
        this.loadImage(); //загружем путь в объект изображения
    }

    loadImage() //функция загрузки изображения
    {
        this.sprite.src = "FrontEnd/Sprite/bird.png"; //приравниваем объекту изображения путь спрайта
    }

    fall() //функция снижения персонажа под гравитацией
    {
        this.y += this.weight;
        this.collisionBox.setPosition( this.x, this.y );
    }

    jump() //функция прыжка персонажа вверх
    {
        this.y -= this.jumpForce;
        this.collisionBox.setPosition( this.x, this.y );
    }
}

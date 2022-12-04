class Scene
{
    constructor() // конутруктор класса это стандартная функция которая выполняется когда создается класс через new
    {
        this.background = new Image(); //создаём объект изображения, слово this стандартное для описания класса.
    }

    setBackground(path)
    {
        this.background.src = path;
    }
}

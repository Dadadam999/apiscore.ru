class ScoreController
{
    constructor() // конутруктор класса это стандартная функция которая выполняется когда создается класс через new
    {
      this.counter = 0;
    }

    increment()
    {
      this.counter++;
    }

    render()
    {
      return "Счет: " + this.counter;
    }
}

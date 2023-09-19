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

    async sendScore()
    {
      let request = await fetch(
          '/BackEnd/Api/Score/Set/', //сюда путь до принимающего php скрипта
          {
              method: 'POST',
              credentials: 'include',
              body: data // в data хранятся передаваемые данные например json
          }
      );

      if (request.ok)
      {
        // запрос прошёл.
      }
    }
}

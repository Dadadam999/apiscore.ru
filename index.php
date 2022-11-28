<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Flopy Ruble</title>
    <script defer src="/js/classes/Scene.js" charset="utf-8"></script>
    <script defer src="/js/classes/Player.js" charset="utf-8"></script>
    <script defer src="/js/classes/Pipe.js" charset="utf-8"></script>
    <script defer src="/js/classes/PipeMananger.js" charset="utf-8"></script>
    <script defer src="/js/classes/ScoreController.js" charset="utf-8"></script>
    <script defer src="/js/UI.js" charset="utf-8"></script>
    <script defer src="/js/Game.js" charset="utf-8"></script>
    <script type="text/javascript">
        const sessionId = 0;
        const userSid = '';
    </script>
    <link rel="stylesheet" href="/css/style.css">
  </head>
  <body>
      <div class="score">Счет: 0</div>
      <div class="main-menu block fogging">
        <div class="content">
          <form class="menu">
             <div class="wrapper">
             <button type="button" name="start" class="start-game">Начать игру</button>
                </div>
             <div class="wrapper">
                <button type="button" name="auth" class="open-auth">Войти</button>
             </div>
             <div class="wrapper">
                <button type="button" name="rank" class="open-rank">Рейтинг</button>
             </div>
          </form>
        </div>
      </div>
      <div class="auth-form block fogging">
        <div class="content">
          <form action="" method="post">
            <div class="wrapper">
               <label for="login">Логин</label>
               <input type="text" name="login" value="">
            </div>
            <div class="wrapper">
               <label for="login">Пароль</label>
               <input type="text" name="pass" value="">
            </div>
            <div class="wrapper">
               <button type="submit" name="submit">Войти</button>
            </div>
          </form>
        </div>
      </div>
      <canvas class="canvas"></canvas>
  </body>
</html>

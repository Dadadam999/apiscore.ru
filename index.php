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
    <script defer src="/js/Game.js" charset="utf-8"></script>
    <script defer src="/js/UI.js" charset="utf-8"></script>
    <script type="text/javascript">
        const sessionId = 0;
        const userSid = '';
    </script>
    <link rel="stylesheet" href="/css/style.css">
  </head>
  <body>
      <div class="score">Счет: 0</div>
      <div class="menu">
           <button type="button" name="start" class="menu_start">Начать игру</button>
           <button type="button" name="auth" class="menu_auth">Войти</button>
           <button type="button" name="rank" class="menu_rank">Рейтинг</button>
      </div>
      <form class="auth" action="" method="post" style="">
        <div class="auth-wrapper">
           <label for="login">Логин</label>
           <input type="text" name="login" value="">
        </div>
        <div class="auth-wrapper">
           <label for="login">Пароль</label>
           <input type="text" name="pass" value="">
        </div>
        <div class="auth-wrapper">
           <button type="submit" name="submit" class="auth_submit"></button>
        </div>
      </form>
      <canvas class="canvas"></canvas>
  </body>
</html>

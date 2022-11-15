<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Flopy Ruble</title>
    <script defer src="/js/classes/player.js" charset="utf-8"></script>
    <script defer src="/js/game.js" charset="utf-8"></script>
    <script type="text/javascript">
        const sessionId = 0;
        const userSid = '';
    </script>
    <link rel="stylesheet" href="/css/style.css">
  </head>
  <body>
      <div class="score"></div>
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

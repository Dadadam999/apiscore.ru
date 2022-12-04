<?php
namespace Flopy;

use Flopy\DataBase;

final class Main
{
    public function __construct()
    {
      //session_start();
      // if ( !isset( $_SESSION['session_key'] ) )
      // $_SESSION['session_key'] = session_id();

      $database = new DataBase();
      require_once __DIR__  . '/View/Game.php';
    }
}
?>

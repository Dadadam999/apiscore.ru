const ui = new Ui();
const game = new Game( ui );

window.addEventListener("load", function()
{
     game.scene.setBackground("FrontEnd/Sprite/Bg.png");
});

function startGame()
{
    game.gameState = game.gameStates.play;
    game.render();
}

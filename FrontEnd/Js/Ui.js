const scoreLabel = document.querySelector(".score");
const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const popups = new Map();
const buttons = new Map();

function init()
{
    popups.set('auth', document.querySelector('.auth-form') );
    popups.set('main', document.querySelector('.main-menu') );
    popups.set('rating', document.querySelector('.rating') );

    initButton(
       'startGame',
       '.start-game',
       () => {
           showPopup('hide');
           gameState = gameStates.play;
           render();
       }
    );

    initButton(
       'openRank',
       '.open-rank',
       () => {
          showPopup('rating');
       }
    );

    initButton(
       'exitRank',
       '.exit-rank',
       () => {
          showPopup('main');
       }
    );

    initButton(
       'openAuth',
       '.open-auth',
       () => {
          showPopup('auth');
       }
    );

    showPopup('main')
}

function initButton( name, selector, delegate )
{
    let button = document.querySelector( selector );
    button.addEventListener( 'click', delegate );
    buttons.set( name, delegate );
}

function hideButton( name )
{
    for ( let pair of buttons.entries() )
    {
        if(pair[0] == name)
        {
            pair[1].style.display = 'none';
            break;
        }
    }
}

function showPopup(name)
{
    for ( let pair of popups.entries() )
        pair[1].style.display = pair[0] == name ? '' : 'none';
}

init();

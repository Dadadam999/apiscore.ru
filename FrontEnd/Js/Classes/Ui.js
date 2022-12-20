class Ui
{
    constructor() // конутруктор класса это стандартная функция которая выполняется когда создается класс через new
    {
        this.scoreLabel = document.querySelector(".score");
        this.canvas = document.querySelector(".canvas");
        this.canvas.style.display = 'none';
        this.scoreLabel.style.display = 'none';
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.popups = new Map();
        this.buttons = new Map();
        this.init();
    }

    init()
    {
        this.popups.set('auth', document.querySelector('.auth-form') );
        this.popups.set('main', document.querySelector('.main-menu') );
        this.popups.set('rating', document.querySelector('.rating') );

        this.initButton(
           'startGame',
           '.start-game',
           () => {
               this.canvas.style.display = '';
               this.scoreLabel.style.display = '';
               this.showPopup('hide');
               startGame();
           }
        );

        this.initButton(
           'openRank',
           '.open-rank',
           () => {
              this.showPopup('rating');
           }
        );

        this.initButton(
           'exitRank',
           '.exit-rank',
           () => {
              this.showPopup('main');
           }
        );

        this.initButton(
           'openAuth',
           '.open-auth',
           () => {
              this.showPopup('auth');
           }
        );

        this.showPopup('main')
    }

    initButton( name, selector, delegate )
    {
        let button = document.querySelector( selector );
        button.addEventListener( 'click', delegate );
        this.buttons.set( name, delegate );
    }

    hideButton( name )
    {
        for ( let pair of this.buttons.entries() )
        {
            if(pair[0] == name)
            {
                pair[1].style.display = 'none';
                break;
            }
        }
    }

    showPopup(name)
    {
        for ( let pair of this.popups.entries() )
            pair[1].style.display = pair[0] == name ? '' : 'none';
    }
}

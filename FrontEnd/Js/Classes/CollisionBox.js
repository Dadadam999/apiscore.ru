class CollisionBox
{
    constructor( x, y, width, height )
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.xw = this.x + this.width ;
        this.yh = this.y + this.height;
    }

    setPosition( x, y )
    {
        this.x = x;
        this.y = y;
        this.xw = this.x + this.width;
        this.yh = this.y + this.height;
    }

    checkInteract( collision )
    {
        return !( this.y > collision.yh || this.yh < collision.y || this.xw < collision.x || this.x > collision.xw );
    }
}

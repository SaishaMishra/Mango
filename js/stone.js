class stone
{
    constructor(x,y,r)
    {
    var options={
        isStatic:false,
        restitution :0,
        friction :1,
        density:1.2,
        }
        this.image=loadImage("images/stone.png")
        this.body = Bodies.circle(x, y,r/2, options);
        World.add(world, this.body)
        this.radius=r;
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius,this.radius);
        pop();
}
}
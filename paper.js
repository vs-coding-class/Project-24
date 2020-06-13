class paperBall{
    constructor(){
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(100,300,10,options);
        World.add(world,this.body);
        this.width = 10;
        this.height = 10;
    }

    display(){
        ellipseMode(CENTER);
        fill(0,255,0);
        ellipse(this.body.position.x,this.body.position.y,this.width/2,this.height/2);
    }
}
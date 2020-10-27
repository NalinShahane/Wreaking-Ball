class Ball {
    constructor(x,y,radius){
        var C_options= {
        'restitution': 0.5,
        'friction': 0.2 , 
        'density': 0.5
        }
        this.body = Bodies.circle(x,y,radius,C_options);
        this.radius = radius;
        World.add(world , this.body);
    }
    display() {
        var angle = this.body.angle;
        var pos = this.body.position; 
        push();
        translate(pos.x , pos.y);
        rotate(angle);
       ellipseMode(CENTER);
       fill("brown");
       ellipse(0 , 0 , this.radius);
       pop();
    }

}
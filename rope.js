class Rope {
    constructor(bodyA , pointB){
        var R_option= {
            bodyA: bodyA , 
            pointB: pointB , 
            'stiffness': 1.2 ,
            'length': 250
        } 
        this.rope = Constraint.create(R_option);
        this.pointB = pointB ;
        World.add(world , this.rope);
    }

     attach(bodyA){
         this.rope.bodyA = body;
     }

     fly(){
         this.rope.bodyA = null;
     }

     display(){
         if(this.rope.bodyA){
             var pointA = this.rope.bodyA.position;
             var pointB = this.pointB;
        push();   
          stroke(255,255,255);
          strokeWeight(5);
           line(pointB.x , pointB.y , pointA.x , pointA.y);  
           pop();
        
         }
     }
}
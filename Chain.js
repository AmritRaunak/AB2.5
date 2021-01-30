class Chain {
    constructor(bodyA,bodyB){
     
     var options={
        bodyA: bird.body,
        bodyB: constraintlog.body,
        stiffness:0.05,
        length:5
    }
     this.chain=Constraint.create(options);
    World.add(world,this.chain);
    }
    display(){
        var pointA=bird.body.position;
        var pointB=constraintlog.body.position;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    
}}
class launcher{
    constructor(body, pointB){
        var options = {
            body: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.stone = Constraint.create(options);
        World.add(world, this.stone);
    }
    fly(){
     this.stone.bodyA=null;
    }
    display(){
        if(this.stone.bodyA){
        var pointA = this.stone.body.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}
}


    

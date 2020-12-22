class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,170,20);
        image(this.sling2,145,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();

            stroke(48,22,8);
            if(pointA.x<180){
                strokeWeight(8);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                line(pointA.x, pointA.y, pointB.x+20, pointB.y);
                image(this.sling3,pointA.x-27,pointA.y-10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x+5, pointA.y, pointB.x, pointB.y);
                line(pointA.x, pointA.y, pointB.x+20, pointB.y);
                image(this.sling3,pointA.x+15,pointA.y-6,15,30);
            }
           pop();
        }
    }
    
}
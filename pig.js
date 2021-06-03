class Pig{
    constructor(x,y){
        var properties={
            restitution:1,
            friction:0.5,
            density:1
        }
        this.body=Bodies.rectangle(x,y,50,50,properties);
        this.width=50;
        this.height=50;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("grey");
        fill("green");
        rect(0,0,this.width,this.height);
        pop();
    }
}
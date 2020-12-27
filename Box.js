class Box{

    constructor( x,y,width,height ) {
        var options= {
            restitution:1.0,
            density:2.0,
            friction: 1  
        }
       this.body=Bodies.rectangle(x,y,width,height,options);
       this.width=width
       this.height=height 
       World.add(world,this.body)
    }
display(){
    var pos = this.body.position;
    var angles= this.body.angle;
    push(); 
    translate(pos.x,pos.y)
    angleMode(RADIANS);
    rotate( angles);
    rectMode(CENTER);
    fill("red"); 
    rect(0,0,this.width,this.height);
    pop();
}

}
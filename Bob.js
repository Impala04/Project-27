class bob{
    constructor(x,y,radius){
        //declaring options for the body in JSON format
        var options={
            isStatic:false,
            restitution:1,
            friction:0.5,
            density:1.2

                    
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        //adding ground to the Physics Engine
        this.body = Bodies.circle(this.x,this.y,this.radius/2,options);
        this.radius=radius
        World.add(world, this.body);  
    }
    display(){
        var bobposition=this.body.position;
        push ()
       translate (bobposition.x,bobposition.y)
       rotate(this.body.angle)
        ellipseMode(CENTER)
        ellipse(0,0,this.radius*2)
        pop ()
    }
}


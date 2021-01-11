class Rope{
    constructor(bodyA,pointB){
       var options= {
         bodyA:bodyA,
        pointB:pointB,
       // length: 50,
        stiffness:0.04
       }
       this.chain=Constraint.create(options)
       World.add(world,this.chain)
    
    }
    displayShow(){
      
        push ()
      stroke ("white")
        line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
       pop ()
    }
 
}

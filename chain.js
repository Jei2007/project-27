class Chain {
    constructor(bodyA,BodyB,offsetX,offsetY) {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA : bodyA,
            BodyB : BodyB,
            pointB : {x:this.offsetX, y:this.offsetY}
        }
        this.sling = Matter.Constraint.create(options)
        World.add(world, this.sling)
    }
    fly() {
        this.sling.bodyA = null
    }
    display() {
        if(this.sling.bodyA) {        
            var posA = this.sling.bodyA.position
            var posB = this.sling.BodyB.position
            fill("white")
            strokeWeight(4)
            line(posA.x,posA.y,posB.x,posB.y)
        }
    }
}
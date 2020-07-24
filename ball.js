class Ball{
    constructor(x,y,width,height){
    var ball_options = {
        isStatic:false,
        restitution:0.8,
        density:1.2,
        friction:0.5,
        'frictionStatic':1,
        'inertia':Infinity

}
    this.body = Bodies.rectangle(x,y,width,height,ball_options);
    this.image=loadImage("sprites/paper.png");  
    this.width=width;
    this.height=height;
    World.add(world,this.body);
}
display(){
   imageMode(CENTER);
   image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
}
	
}
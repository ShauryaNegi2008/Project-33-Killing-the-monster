class Hero {
  constructor(x,y,r)
	{
		var options = { 
			density: 1, 
			// frictionAir: 1
		};
		this.x=x;
		this.y=y;
		this.r=r;
		this.rand=Math.round(random(1,2))
		this.Img=loadImage("superhero.png")
		this.Img1=loadImage("superhero1.png")
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);

	}
	
	display()
	{
			
			var heroPos=this.body.position;		
			
			push()
			translate(heroPos.x, heroPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			
switch(this.rand){
	case 1: image(this.Img, -400,-30,this.r+150, this.r)
	break
	case 2: image(this.Img1, -400,-30,this.r+150, this.r)
	 break
	 defaultBreak();
}
			console.log(this.rand)

			
			pop()
			

	}
}

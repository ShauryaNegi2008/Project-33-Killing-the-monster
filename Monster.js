class Monster {
  constructor(x,y,r)
	{
		var options = { 
      density: 5, 
      frictionAir: 0
    };
		this.x=x;
		this.y=y;
		this.r=r;
		this.rand=Math.round(random(1,3))
		this.Img=loadImage("monster.png")
		this.Img1=loadImage("monster1.png")
		this.Img2=loadImage("monster2.png")
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			switch(this.rand){
				case 1 :image(this.Img,0,0,this.r, this.r)
				break
				case 2 :image(this.Img1,0,0,this.r, this.r)
				break
				case 3 :image(this.Img2,0,0,this.r, this.r)
				break
			}
			pop()
			
	}
}

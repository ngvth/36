class oto {
	constructor(game){
		this.game = game;
		this.image = null;
		this.isImageLoaded = false;

		this.x = OTO_START_X;
		this.y = OTO_START_Y;
		 this.loadImage();
	}
	loadImage(){
		this.image = new Image;
		this.image.onload = () => {
			this.isImageLoaded = true;
		}
		this.image.src = 'images/oto.png';
	}
	update(){

		this.x += SPEED;

	}
	draw(){
		

		if( ! this.isImageLoaded){
			return;
		}
		this.game.context.drawImage(this.image,this.x,this.y);
	}
}
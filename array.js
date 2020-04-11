class array{
	constructor(game){
		this.game = game;
		this.stations = [];
		this.x = STATION_START_X;
		this.y = STATION_START_Y;
		this.createStations();
	}
	update() {
		for(let i = 0; i <5; i++){
			if(this.game.car.x == this.stations[i].x){
				SPEED = 0;
			}
		}
	}

	createStations() {
		let a = 0;
		for(let i = 0; i < 7; i++){
			this.x = TRAM_START_X + a;
			this.y = TRAM_START_Y;
			let newStation = new station(this.game,this.x,this.y);
			a+=120;
			this.stations.push(newStation);
		}
	}

	draw() {
		this.stations.forEach((station) => {
			station.draw();
		});
	}
}
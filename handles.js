class handles {
    constructor(game) {
        this.game = game;
        this.checks = [];
        this.listenKeyBoard();
        this.checked();
        let num = -1;
        let t = 0;
    }
    checked() {
        for (let i = 0; i < 5; i++) {
            this.checks[i] = 0;
        }
    }
    listenKeyBoard() {
        document.addEventListener('keydown', (event) => {
            //console.log(event.keyCode - 48);

            let j = event.keyCode - 48;
            this.num = j;
            if ((j < 6) && (this.game.oto.x == this.game.array.trams[j - 1].x)) {
                console.log(this.game.oto.x);
                this.checks[j - 1] = 1;
                SPEED = 1;
            } else {
                this.checks[(this.game.oto.x - 150) / 120] = -1;
            }
        });
    }
    update() {

    }
    draw() {
        for (let i = 0; i < 5; i++) {
            if (this.checks[i] == 1) {
                this.game.context.font = "40px Georgia";
                this.game.context.fillText(i + 1, this.game.array.trams[i].x + 20, this.game.array.trams[i].y + 40);
                continue;
            } else
            if ((this.checks[i] == -1)) {
                this.game.context.font = "40px Georgia";
                this.game.context.fillText(this.num, this.game.array.trams[i].x + 20, this.game.array.trams[i].y + 40);
                break;
            }

        }
    }
}

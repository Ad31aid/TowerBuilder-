var canvasWidth = 600;
var canvasHeight = 400;

function startGame() {
        gameCanvas.start();
}

var gameCanvas = {
        canvas: document.createElement('canvas'),
        start: function() {
                this. canvas.width = canvasWidth;
                this. canvas. height = canvasHeight;
                this.context = this. canvas.getContext('2d');
                document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        }
}

var player;
var playerYPosition = 200

function startGame(){
        gameCanvas.start();

        player = new createPlayer(30,30,10)
}

function createPlayer(width,height,x){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = playerYPosition;

        this.draw = function(){
                ctx = gameCanvas.context;
                ctx.fillStyle = 'green';
                ctx.fillRect(this.x, this.y, this.width, this.height)     
        }
        
        this.makeFall = function(){
                this.y += fallSpeed;
                fallSpeed += 0.1;
                this. stopPlayer();
        }

}

var fallSpeed = 0;
var interval = setInterval(updateCanvas,20);

function updateCanvas(){
        ctx = gameCanvas.context;
        ctx.clearRect(0,0,canvasWidth,canvasHeight);

        player.makeFall()
        player.draw()
}

//that's where I got
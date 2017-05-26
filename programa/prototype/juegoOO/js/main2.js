//creo una funcion anonima(function main(){})();
(function(){
			self.Tablero = function(width,height){
				this.width = width;
				this.height = height;
				this.playing = false;
				this.game_over = false;
				this.barras = [];
				this.ball = null;
			}
			//modelo
			self.Tablero.prototype = {
				get elements(){
					var elements = this.barras;
					//elements.push(this.ball);
					return elements;
				}
			}
})();

(function(){

	self.barra = function(posx,posy,width,height,tablero){
		this.posx = posx;
		this.posy = posy;
		this.width = width;
		this.height = height;
		this.tablero = tablero;
		this.tablero.barras.push(this);
		this.kind = "rectangulo";
		this.velocidad = 10;
	}

	self.barra.prototype = {
		donw: function(){
			this.posx += this.velocidad;
		},
		up: function(){
			this.posx -= this.velocidad;
		}
		toString: function(){
			return "x: "+this.posx +"y: "+this.posy;
		}
	}
})();

//funcion anonima (function(){})();
(function(){
	//la vista
	self.tableroVista = function(canvas,board){
		this.canvas = canvas;
		this.canvas.width = board.width;
		this.canvas.height = board.height;
		this.board = board;
		this.ctx = canvas.getContext("2d");
	}
	self.tableroVista.prototype = {
		//clear: function (){
			//ctx.clearRect(0,0,this.board.width,this.board.height);
		//}
		draw:function(){
			for (var i = this.board.elements.length-1; i>=0; i--) {
				var el = this.board.elements[i];
				draw(this.ctx,el);
			};
		}
	}
	//helpersmets
	function draw(ctx,element){
		//if(element !== null && element.hasOwnProperty("kind")){
		switch(element.kind){
			case "rectangle":
			ctx.fillRect(element.x,element.y,element.width,element.height);
			break;
		//}
		}
	}
})();
var board = new Board(800,400);
var bar = new Bar(350,360,100,40,board);
//var bar_2 = new Bar(735,100,40,100,board);
var canvas = document.getElementById('canvas');
var board_view = new tableroVista(canvas,board);

//setInterval(main,100); Ya no se usa
//window.requestAnimationFrame(controller);

document.addEventListener("keydown",function(ev){
	alert(keyCode);
	ev.preventDefault();
	if (ev.keyCode == 37) {
		Bar.up();
	}
	else if(ev.keyCode == 39) {
		Bar.down();
	}else if(ev.keyCode == 87) {
	}
	else if(ev.keyCode == 83) {
	}
});
self.addEventListener("load",controller);
//se encarga de instanciar
function controller(){
tableroVista.draw();
//window.requestAnimationFrame(controller);
}

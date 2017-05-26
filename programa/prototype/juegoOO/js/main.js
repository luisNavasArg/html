(function(){
	  self.Board = function(width,height){
		this.width = width;
		this.height =height;
		this.playing = false;
		this.game_over= false;
		this.barras =[];
		//this.ball=null;
}
		//modelo
		self.Board.prototype={
			get elements(){
					var elements = this.barras;
					//elements.push(this.ball);
					return elements;
			}
		}
	})();
	//funcion anonima (function(){})();
(function(){
	//declaramos nueva clase
	self.Bar = function(x,y,width,height,board){
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.board=board;
		this.board.barras.push(this);
		this.kind = "rectangle";
		this.speed = 10;
		this.olor = "blue";
	}
	//objeto json
	  self.Bar.prototype = {
		derecha: function(){
			//this.ctx.clearRect(this.x,this.y,this.width,this.height);
			this.x +=  this.speed;
			var bar = new Bar(this.x,360,100,40,board);

		},
		izquierda: function(){

			this.x -= this.speed;
			var bar = new Bar(this.x,360,100,40,board);
		},
		toString: function(){
			return "x: "+this.x +" y:"+ this.y;
		}
	}
})();

//funcion anonima (function(){})();
(function(){
	//la vista
	self.BoardView = function(canvas,board){
		this.canvas = canvas;
		this.canvas.width = board.width;
		this.canvas.height = board.height;
		this.board = board;
		this.ctx = canvas.getContext("2d");
	}
	self.BoardView.prototype = {
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
			ctx.clearRect(0,0,800,400);
			ctx.fillRect(element.x,element.y,element.width,element.height);
			break;
			case "circulo":
			ctx.beginPath();
			ctx.arc(30,30,20,20,2*Math.PI);
			ctx.stroke();
			break;
		//}
		}
	}

})();
var board = new Board(800,400);
var bar = new Bar(350,360,100,40,board);
//var bar_2 = new Bar(735,100,40,100,board);
var canvas = document.getElementById('canvas');
var board_view = new BoardView(canvas,board);
//setInterval(main,100); Ya no se usa
//window.requestAnimationFrame(controller);

document.addEventListener("keydown",function(ev){
		ev.preventDefault();
	if(ev.keyCode == 37){
		bar.izquierda();
	}
	else if(ev.keyCode == 39) {
		bar.derecha();
	}

});
self.addEventListener("load",controller);
//se encarga de instanciar
function controller(){
//this.bar.kind="circulo";
board_view.draw();
window.requestAnimationFrame(controller);
}

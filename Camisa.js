class Camisa{
	constructor(M, T, C, al, an, x, y){
		this.Marca = M;
		this.Talla = T;
		this.Color = C;
		this.Altura = al;
		this.Ancho = an;
		this.X = x;
		this.Y = y;
	}

	Dibujar( contextoDeDibujo){

		 contextoDeDibujo.strockStyle = this.Color;




		//Rectangulo
	    var radio=this.Ancho/2;
		 contextoDeDibujo.fillStyle = this.Color; 
		 contextoDeDibujo.fillRect(this.X, this.Y, this.Ancho/3 *4 + 3.5, this.Altura/2);
		 contextoDeDibujo.fill();


        
	     //Curva

		var radio=this.Ancho/2;

		 contextoDeDibujo.beginPath();
		 contextoDeDibujo.fillStyle = "White";
		 contextoDeDibujo.moveTo(this.X+10, this.Y);
		 contextoDeDibujo.bezierCurveTo(this.X+15, this.Y+25, this.X+55, this.Y+25, this.X+60, this.Y);
		 contextoDeDibujo.moveTo(110, 10);
		 contextoDeDibujo.fill();
		
      
         //manga

        var radio=this.Ancho/2;
         contextoDeDibujo.beginPath();
		 contextoDeDibujo.fillStyle = "gray";
		 contextoDeDibujo.fillRect(this.X-30, this.Y, this.Ancho/4 *2 + 5, this.Altura/4 + 5);
		 contextoDeDibujo.fill();

        //manga derecha

		var radio=this.Ancho/2;
         contextoDeDibujo.beginPath();
		 contextoDeDibujo.fillStyle = "gray";
		 contextoDeDibujo.fillRect(this.X + 70, this.Y, this.Ancho/4 *2 + 5, this.Altura/4 + 5);
		 contextoDeDibujo.fill();


		 //Datos

		 contextoDeDibujo.beginPath();
        contextoDeDibujo.font = "bold 22px sans-serif";
        contextoDeDibujo.fillText(this.Marca, this.X+3, this.Y+6*radio);
        contextoDeDibujo.beginPath();
        contextoDeDibujo.font = "bold 22px sans-serif";
        contextoDeDibujo.fillText(this.Talla, this.X+3, this.Y+7*radio);  
        contextoDeDibujo.beginPath();
        contextoDeDibujo.font = "bold 22px sans-serif";
        contextoDeDibujo.fillText(this.Ancho, this.X+3, this.Y+8*radio); 
	}
}
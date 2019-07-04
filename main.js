var arregloCamisa;
function crearCamisa(){
    var myCanvas = document.getElementById("myCanvas");
    var context = myCanvas.getContext("2d");
    context.clearRect(0,0, myCanvas.whidth, myCanvas.height);
/*
    var objCamisa = new Camisa("Pirma",
                              27,
                             "blue",
                             80,
                             600,
                             50, 10);
    objCamisa.Dibujar(context);
    */

   var arregloCamisa = new Array(
            new Camisa("Pirma", 18, "black", 200, 50, 50, 10),
            new Camisa("Polo", 15, "green", 150, 50, 200, 10),
            new Camisa("Adidas", 25, "yellow", 245, 50, 350, 10)
        );
    for (var i = arregloCamisa.length - 1; i >= 0; i--) {
        arregloCamisa[i].Dibujar(context);
    }
}
    



   function OrdenarCamisasMarca(){

	var n = arregloCamisa.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(arregloCamisa[j].Marca > arregloMarca[j+1].Marca){
				//Intercambio
				aux = arregloCamisa[j];
				aux_x_j = arregloCamisa[j].X;
				aux_y_j = arregloCamisa[j].Y;
				aux_x_j_1 = arregloCamisa[j+1].X;
				aux_y_j_1 = arregloCamisa[j+1].Y;
				
				arregloCamisa[j] = arregloCamisa[j+1];
				arregloCamisa[j+1] = aux;

				arregloCamisa[j].X = aux_x_j;
				arregloCamisa[j].Y = aux_y_j;

				arregloCamisa[j+1].X = aux_x_j_1;
				arregloCamisa[j+1].Y = aux_y_j_1;
			}
		}
	}
		var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle = "#fff";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	for (var i = arregloCamisa.length - 1; i >= 0; i--) {
		arregloCamisa[i].Dibujar(context);
		
	}
	
}



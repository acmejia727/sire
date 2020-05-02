console.log('hola mundo')
var a = 4.5;
var b = 5;
var c = 'andres';
var sum = a + b
console.log('el resultado es '+ sum)
var  hora = new Date()
console.log(hora.getHours())
//

function popus(){
    var pregunta = confirm("¿Deseas visitar la página principal?") //true or false
	if (pregunta){
		alert("Te envío allí rápidamente")
		window.location = "https://norfipc.com/";
	}
	else{
		alert("Quizás en otro momento...\n Gracias de todas formas")
	}
}



function sumar(){

    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    
    sum = parseInt(numero1)+parseInt(numero2)
    document.getElementById('result').innerHTML = sum
    
    console.log(sum)

}




// CODIGO NUEVO

var today = moment().format('YYYY-MM-DD');

 function new_clock(){ 

 clock = new Date() 
 hour =   clock.getHours() 
 minutes = clock.getMinutes() 
 seconds = clock.getSeconds() 

 print_clock = today + " " + hour + ":" + minutes + ":" + seconds 

var clock_print = document.getElementById('fecha_registro')

clock_print.value = print_clock;
setTimeout(new_clock, 1000)
 }

 setTimeout(new_clock, 1000)




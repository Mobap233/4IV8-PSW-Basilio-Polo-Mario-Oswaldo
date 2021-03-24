/*
vamos a crear una fincion que se encargue que 
a partr de una expresion regular se valide la entrada 
unicamente de numeros
*/

function validarn(e){


    //Definimos un patron que consideramos correcto que viene a partir de la entrada del teclado (KeyCode)
    //wich compara si es verdadero se quda con lo que es verdaero si no cumple el codigo no lo ejecuta
    var teclado = (document.all)?e.keyCode:e.which

    // == 8 código de la tecla númerica
    if(teclado == 8)return true;


    //diagonales invirtidas dicen algo.
    var patron = /[0-9\d .]/

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);


}

function interes(){

    var valor = document.formulario.cantidad.value;
    var result= parseInt(valor);
    var interes = result * 0.02;
    var total = result+interes;

    document.formulario.sueldoti.value = "$" +total;

}



function borrar(){

    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";

}

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

function calculo(){

    var valorbase = document.formulario.sueldo.value;
    var valorventas = document.formulario.ventas.value;

    var valorbase_1 = parseInt(valorbase);
    var valorventas_1 = parseInt(valorventas);

    var comision = valorventas_1*(valorbase_1*0.10);

    var total = comision + valorbase_1;

    document.formulario.comision.value = "$" +comision;
    document.formulario.sueldoti.value = "$" +total;



}



function borrar(){

    document.formulario.sueldo.value = "";
    document.formulario.ventas.value = "";
    document.formulario.comision.value = "";
    document.formulario.sueldoti.value = "";


}

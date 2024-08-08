function calculoDeIMC(altura, peso){
var imc = peso / (altura * altura);
    return imc;
}

function calcularFactorial(numero){
    if (numero === 0 || numero === 1){
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}

let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

function conversionDolar (dolar){
    var valorDolar = 4.80;
    var  reales = dolar * valorDolar;
    return reales;
}

let valDolar = 54;
let ValorEnReales = conversionDolar (valDolar);
console.log(`${valDolar} dolares en Reales son R$ ${ValorEnReales}`);

function calcularAreaYPerimetroRectangular (altura, anchura){
    var area= altura * anchura;
    var perimetro = 2 * (altura + anchura);
    console.log ("Área: " + area);
    console.log ("Perímetro: " + perimetro);
}

let altura = 3;
let anchura = 5;
calcularAreaYPerimetroRectangular(altura,anchura);

function calcularAreaYPerimetroCircular (radio){
    var pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log("Área: " + area);
    console.log ("Perímetro: " + perimetro);
}

let radio = 4;
calcularAreaYPerimetroCircular(radio);

function mostrarTablaMultiplicar (numero1){
    for (var i=1; i<=10;i++){
        var resultado1 = numero1 * i;
        console.log (numero1 + "x " + i + " = " + resultado1); 
    }
}

let numero1 = 6;
mostrarTablaMultiplicar (numero1);


const numero = parseInt(prompt('ingrese un numero:'));


switch (numero != isNaN) {
    case numero % 2 === 0:
        document.write('El ' + numero + ' es divisible en 2.');
    break;
    case numero % 3 === 0:
        document.write('El ' + numero + ' es divisible en 3.');
    break;
    case numero % 5 === 0:
        document.write('El ' + numero + ' es divisible en 5.');
    break;
    case numero % 7 === 0:
        document.write('El ' + numero + ' es divisible en 7.');
    break;
    default:
        document.write('El '+ numero + ' No es divisible en 2, 3, 5, 7.');
       break;
}
let num1 = parseInt(prompt('Ingrese un numero:'));
let num2 = parseInt(prompt('Ingrese un numero:'));
let num3 = parseInt(prompt('Ingrese un numero:'));


if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)){
    if (num1 > num2  && num1 > num3) {
    document.write('El numero mas grandes es: ' + num1);
} else if (num2 > num3 && num2 > num1){
    document.write('El numero mas grandes es: ' + num2);
} else {
    document.write('El numero mas grandes es: ' + num3);
}

}else{
    alert('ingrese solo numeros');
}


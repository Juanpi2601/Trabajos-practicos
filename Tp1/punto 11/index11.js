let numero = parseInt(prompt('ingrese un numero:'));
let guardarDiv = [];

    if (numero % 2 === 0) {
        guardarDiv.push(2);
    }
    if (numero % 3 === 0) {
        guardarDiv.push(3);
    }
    if (numero % 5 === 0) {
        guardarDiv.push(5);
    }
    if (numero % 7 === 0) {
        guardarDiv.push(7);
    }
    
    if (guardarDiv.length > 0) {
        document.write(`${numero} es divisible por los siguientes números: ${guardarDiv.join(', ')}.`);
    } else {
        document.write(`${numero} no es divisible por 2, 3, 5 ni 7.`);
    }

const frase = ('Ingrese una frase:');
frase = frase.toLowerCase();
let calcVocales = [];

for (let i=0; i<frase.length; i++){
    let guardarCaracter = frase.charAt(i);

    if('aeiou'.includes(guardarCaracter)){
        calcVocales += guardarCaracter;
    }
}

if(calcVocales){
    document.write(calcVocales);
}else{
    document.write('No se encontraron vocales en la frase');
}
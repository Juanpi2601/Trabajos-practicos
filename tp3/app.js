/*Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random 
para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

*/

const randomNum = () => {
    return Math.floor(Math.random() * 6) + 1; 
}

const tirarDados = () => {
    const result = new Array(11).fill(0); 

    for (let i = 0; i < 50; i++) {
        const dado1 = randomNum();
        const dado2 = randomNum();
        const suma = dado1 + dado2;

        result[suma - 2]++;
    }

    for (let i = 2; i <= 12; i++) {
        console.log(`La suma ${i} apareció ${result[i - 2]} veces.`);
    }
}

tirarDados();
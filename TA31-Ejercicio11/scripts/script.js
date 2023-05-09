//Definimos un array para almacenar las veces que aparece cada suma
const contadorSuma = new Array(11).fill(0);

//Con un for hacemos 36.000 lanzamientos de los dos dados
for (let i = 0; i < 36000; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;

  //Sumamos los resultados de los dos dados
  let sum = dado1 + dado2;
  
  //Incrementamos el contador a la suma obtenida
  contadorSuma[sum - 2]++;
}

//Mostraramos los resultados en la consola
for (let i = 0; i < contadorSuma.length; i++) {
  console.log(`La suma ${i + 2} se ha obtenido ${contadorSuma[i]} veces`);
}
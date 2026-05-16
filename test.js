function sumar(a, b) {
  return a + b;
}

if (sumar(2, 2) === 4) {
  console.log(" :) Prueba unitaria exitosa: 2+2 es 4");
  process.exit(0); 
} else {
  console.log(" :( Prueba fallida");
  process.exit(1); /
}

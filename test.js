const sumar = (a, b) => a + b;

console.log("Ejecutando pruebas unitarias...");

if (sumar(2, 2) === 4) {
    console.log("✅ Prueba exitosa: 2 + 2 es igual a 4");
    process.exit(0); 
} else {
    console.log("❌ Prueba fallida");
    process.exit(1);
}

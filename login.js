// Simulación de autenticación
function validarUsuario(user, password) {
    if (user === "admin" && password === "1234") {
        return "Bienvenido";
    }
    return "Error de acceso";
}

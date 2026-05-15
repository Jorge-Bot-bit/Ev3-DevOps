** Ev1-DevOps **
Evaluacion 1

 1.Justificación
¿Por qué elegí GitFlow?
Para que todo esté de manera jerarquizada y ordenada.

Se trabaja todo en la rama "develop". Así, la rama "main" siempre está limpia y lista para mostrar, sin código a medio terminar. Además, si se tiene que hacer una función nueva (como un Login), simplemente se crea su propia rama "feature". Esto permite que, si dos personas trabajan en cosas distintas, no se choquen entre sí.
También es útil por si algo falla cuando el sitio ya está al aire; sería cosa de sacar un "hotfix" rápido desde la rama "main" y listo, evitando así mezclarlo con lo que se esté desarrollando para el futuro.

Elegí GitFlow también por el siguiente motivo:
Nombres de ramas muy descriptivos: Se usan nombres muy fáciles de entender como feature/lo-que-estoy-haciendo o hotfix/el-error-que-arreglo.

 2. Estructura del Repositorio 
El respositorio cuenta con los siguientes archivos:
* login.js : Codigo inicial de autenticación (creado en la rama feature/login).
* DB_settings.php: Configuración inicial de base de datos (creado en la rama feature/database).
* hotfix_v1.0.1.js: Corrección de emergencia (creado en la rama hotfix/error-critico).

 3. Uso Local de Consola Git Bash
3.1. Clonar el proyecto:
git clone https://github.com/USUARIO_LOCAL/Ev1-DevOps.git
3.2. Entrar a la carpeta:
cd Ev1-DevOps
3.3. Ver todas las ramas:
git branch -a

 4. Convenciones
 Mensajes de commit: Se uso el prefijo Hotfix: para errores críticos.
 Flujo de integración: Todo cambio paso por un Pull Request antes de unirse a la rama principal.

** Ev2-DevOps **
Evaluacion 2


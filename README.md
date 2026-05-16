# Ev2-DevOps
Evaluacion 2 -

# Docker, Pipeline y Seguridad

En esta etapa cree el pipeline automatizado junto a diversas alertas y medidas de seguridad

# Parte de Contenerización 
*Dockerfile*: Archivo configurado para construir una imagen.
*Docker Compose*: Utilizado para la orquestación del servicio y simulación de despliegue.

# El Pipeline
El pipeline está automatizado mediante github actions --> en el archivo devops-pipeline.yml y realiza:
**Pruebas Unitarias**: Ejecución de tests de lógica simple con Node.js --> archivo test.js.
**Build**: Construcción automática de la imagen Docker.
**Despliegue Simulado**: Orquestación automática usando Docker Compose en los Runners de GitHub.

# La Seguridad
**Snyk**: Lo integre en el pipeline para escanear vulnerabilidades en dependencias.
**Bloqueos**: Configure el pipeline para detenerse si el análisis de seguridad falla.
**Dependabot**: Le habilite la opcion para alertas continuas de seguridad y actualizaciones automáticas.

# La Trazabilidad
Se puede verificar el historial de ejecuciones, pruebas y despliegues en la pestaña actions.

# Ev2-DevOps
Evaluacion 2 -

# Docker, Pipeline y Seguridad

En esta etapa cree el pipeline automatizado junto a diversas alertas y medidas de seguridad

# Parte de Contenerización 
**Dockerfile**: Archivo configurado para construir una imagen.
**Docker Compose**: Utilizado para la orquestación del servicio y simulación de despliegue.

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

# Ev3-DevOps (Documentar cómo estas herramientas se integran en el pipeline CI/CD y cómo permiten tomar decisiones técnicas. (IE4))
Evaluacion 3 -

# 1. ¿Cómo se conectan las herramientas en el pipeline?
Para esta entrega, arme un flujo automatizado donde GitHub Actions, un clúster de Kubernetes corriendo sobre una instancia AWS EC2 (t3.small) con sistema operativo Ubuntu Server, y Amazon CloudWatch trabajan de la mano para que el despliegue sea un proceso 100% seguro y controlado.

**El Filtro de Seguridad (Quality Gate)**: Primero, el pipeline pasa por un filtro de seguridad súper estricto antes de tocar la infraestructura. Configure un script de auditoría personalizado que escanea todo el código usando comandos grep para asegurarse de que a nadie se le haya pasado una contraseña o una llave de AWS en texto plano.

**El Despliegue en Kubernetes (EC2 + Ubuntu)**: Si el código está limpio, el pipeline recién ahí avanza con luz verde, toma los secretos de conexión y le manda la orden declarativa al clúster de Kubernetes (un ambiente single node optimizado) montado sobre la máquina Ubuntu Server. Con un kubectl apply -f k8s/, actualiza los pods en producción de forma automática.

**Observabilidad en Vivo**: Al mismo tiempo, deje corriendo el agente de CloudWatch configurado a nivel de sistema operativo en Ubuntu, el cual se encarga de recolectar métricas de la instancia de EC2 y los eventos de logs para enviarlos directo a los paneles de AWS en tiempo real.

# 2. ¿Cómo ayuda esto a tomar decisiones técnicas?
Toda esta telemetría y automatización no es solo para que el pipeline se vea bonito, sino que se convierte en la herramienta principal para tomar decisiones basadas en datos reales:

**Decisiones de Seguridad Inmediatas**: Si el script de seguridad salta y bloquea un commit por credenciales expuestas, la decisión del equipo es inmediata: se frena el despliegue, se audita el código comprometido y se aplican políticas de rotación de llaves antes de que se genere una vulnerabilidad real.

**Control de Capacidad (t3.small)**: Gracias a los gráficos de consumo de CPU y flujo de logs que da CloudWatch, se puede hacer un análisis súper claro. Al saber que se opera sobre una instancia t3.small con Ubuntu, si vemos que el consumo de los recursos base de Kubernetes se dispara de forma sostenida por exceso de tráfico, esta informacion respalda técnicamente para decidir si se debe implementar un escalado vertical migrando a una instancia de AWS con más RAM y CPU.

**Resiliencia y Continuidad del Negocio**: Si ocurre un fallo crítico durante un despliegue (como el timeout de red que nos dio el API Server de Kubernetes o una mala configuración en el YAML), el pipeline avisa inmediatamente. Esto permite tomar la decisión en tiempo real de tirar un Rollback a la última versión estable del contenedor para que la app siga arriba para los usuarios mientras se soluciona el problema de fondo en el servidor.


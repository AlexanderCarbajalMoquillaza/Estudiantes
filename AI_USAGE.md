# AI_USAGE.md

Describe cómo usaste IA en el desarrollo. Ejemplo de contenido:

## Dónde usé IA
- Generación inicial de la estructura del backend (rutas, esquemas).
- Sugerencias de diseño para el frontend (componentes).
- Ayuda para construir el docker-compose y comandos de Docker.

## Qué hice manualmente
- Implementé las validaciones Pydantic y la lógica de búsqueda en MongoDB.
- Diseñé la UI y escribí los componentes React.

## Limitaciones observadas de la IA
- Requiere revisar y adaptar el código generado (por ejemplo la conversión de ObjectId).
- Sugerencias de seguridad y autenticación no siempre completas.

## Ejemplo de mejora sugerida por la IA que implementé
- La IA sugirió separar rutas en módulos y usar Pydantic para validación: lo apliqué en `app/routes` y `app/schemas`.

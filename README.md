# ZTRACK - Prueba Técnica (Plantilla)

Plantilla base para la prueba técnica descrita en el PDF de ZGROUP.

## Tecnologías
- Backend: FastAPI, Motor (MongoDB async)
- Frontend: React (JS) + Tailwind (config incluida)
- Orquestación: Docker Compose (mongo, backend, frontend)

## Estructura
```
ztrack/
├── backend/
└── frontend/
```

## Ejecutar con Docker (recomendado)
1. Clona el repo
2. Desde la raíz del proyecto ejecuta:
   ```bash
   docker-compose up --build
   ```
3. Backend disponible en `http://localhost:8000`
   - Docs automáticos: `http://localhost:8000/docs`
4. Frontend disponible en `http://localhost:5173`

## Endpoints implementados (mínimos requeridos)
- `POST /api/students/` -> crea estudiante
- `GET /api/students/` -> lista estudiantes
- `POST /api/exams/` -> registra nota (payload: student_id, subject, score)
- `GET /api/exams/{student_id}` -> obtiene notas de estudiante

## Archivos importantes
- `AI_USAGE.md` -> documento para explicar uso de IA
- `backend/app/` -> código backend
- `frontend/` -> código frontend

## Sugerencias para la entrega
- Subir a GitHub.
- Invitar a `ztrack@zgroup.com.pe` o `ztrackperu`.
- Enviar correo con asunto: "Prueba Técnica Completada" y los datos solicitados.


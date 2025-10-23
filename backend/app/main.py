from fastapi import FastAPI
from app.routes import students, exams
import logging
import uvicorn

app = FastAPI(title="ZTRACK - Backend")

# configure simple logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("ztrack")

app.include_router(students.router, prefix="/api/students", tags=["students"])
app.include_router(exams.router, prefix="/api/exams", tags=["exams"])

@app.get("/")
async def root():
    return {"status": "ok", "app": "ZTRACK backend"}

if __name__ == '__main__':
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)

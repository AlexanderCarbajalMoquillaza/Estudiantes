from fastapi import APIRouter, HTTPException
from app.db.connection import db
from app.schemas.student import StudentCreate
from app.utils import prepare_document_for_response, prepare_documents_for_response
import logging
from bson import ObjectId

router = APIRouter()
logger = logging.getLogger("ztrack.students")

@router.post("/", status_code=201)
async def create_student(payload: StudentCreate):
    student = payload.dict()
    res = await db.students.insert_one(student)
    student['id'] = str(res.inserted_id)
    logger.info("Created student %s", student['id'])
    return prepare_document_for_response(student)

@router.get("/")
async def list_students():
    cursor = db.students.find()
    students = []
    async for doc in cursor:
        prepared_doc = prepare_document_for_response(doc)
        students.append(prepared_doc)
    return students

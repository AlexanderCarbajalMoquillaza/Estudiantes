from fastapi import APIRouter, HTTPException
from app.db.connection import db
from app.schemas.exam import ExamCreate
from app.utils import prepare_document_for_response, prepare_documents_for_response
import logging
from bson import ObjectId

router = APIRouter()
logger = logging.getLogger("ztrack.exams")

@router.post("/")
async def create_exam(payload: ExamCreate):
    # validate student exists
    student = await db.students.find_one({'_id': ObjectId(payload.student_id)})
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    exam = payload.dict()
    res = await db.exams.insert_one(exam)
    exam['id'] = str(res.inserted_id)
    logger.info("Created exam %s for student %s", exam['id'], payload.student_id)
    return prepare_document_for_response(exam)

@router.get("/{student_id}")
async def get_exams(student_id: str):
    try:
        obj_id = ObjectId(student_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid student_id")
    cursor = db.exams.find({'student_id': student_id})
    exams = []
    async for doc in cursor:
        prepared_doc = prepare_document_for_response(doc)
        exams.append(prepared_doc)
    return exams

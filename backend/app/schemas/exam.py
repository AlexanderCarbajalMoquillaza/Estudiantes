from pydantic import BaseModel, Field
from typing import Optional

class ExamCreate(BaseModel):
    student_id: str = Field(..., min_length=1)
    subject: str = Field(..., min_length=1)
    score: float = Field(..., ge=0, le=20)

class ExamOut(ExamCreate):
    id: str

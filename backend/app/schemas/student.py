from pydantic import BaseModel, Field
from typing import Optional

class StudentCreate(BaseModel):
    first_name: str = Field(..., min_length=1)
    last_name: str = Field(..., min_length=1)
    email: Optional[str] = None

class StudentOut(StudentCreate):
    id: str

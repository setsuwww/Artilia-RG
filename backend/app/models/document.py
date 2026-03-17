from pydantic import BaseModel
from typing import Dict

class Document(BaseModel):
    type: str
    title: str
    content: Dict

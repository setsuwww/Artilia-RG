from fastapi import APIRouter
from app.models.document import Document
from app.services.document_service import create_document

router = APIRouter()

@router.post("/documents")
def create(doc: Document):
    return create_document("dummy_user_id", doc.dict())

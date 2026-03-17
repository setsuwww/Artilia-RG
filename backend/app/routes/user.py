from fastapi import APIRouter
from app.models.user import User
from app.services.user_service import create_user, get_all_users

router = APIRouter()

@router.post("/users")
def create(user: User):
    return create_user(user.dict())

@router.get("/users")
def get_all():
    return get_all_users()

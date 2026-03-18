from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel

from app.db.session import get_db
from app.services.auth_service import register_user, login_user
from app.core.deps import get_current_user

router = APIRouter()

class AuthInput(BaseModel):
    email: str
    password: str


@router.post("/register")
def register(data: AuthInput, db: Session = Depends(get_db)):
    return register_user(db, data.email, data.password)


@router.post("/login")
def login(data: AuthInput, db: Session = Depends(get_db)):
    return login_user(db, data.email, data.password)


@router.get("/me")
def me(current_user = Depends(get_current_user)):
    return current_user

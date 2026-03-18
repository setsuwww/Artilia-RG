from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.services.user_service import get_users, get_user_by_id, update_user, delete_user
from app.core.deps import get_current_user

router = APIRouter(prefix="/users")

@router.get("/")
def list_users(db: Session = Depends(get_db)):
    return get_users(db)


@router.get("/{user_id}")
def get_user(user_id: int, db: Session = Depends(get_db)):
    return get_user_by_id(db, user_id)


@router.put("/{user_id}")
def update(user_id: int, data: dict, db: Session = Depends(get_db)):
    return update_user(db, user_id, data)


@router.delete("/{user_id}")
def delete(user_id: int, db: Session = Depends(get_db)):
    return delete_user(db, user_id)

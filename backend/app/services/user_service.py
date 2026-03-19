from sqlalchemy.orm import Session
from app.models.user import User
from fastapi import HTTPException

def get_users(db: Session):
    return db.query(User).all()

def get_user_by_id(db: Session, user_id: int):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

def update_user(db: Session, user_id: int, data: dict):
    user = get_user_by_id(db, user_id)

    for key, value in data.items():
        setattr(user, key, value)

    db.commit()
    db.refresh(user)

    return user

def delete_user(db: Session, user_id: int):
    user = get_user_by_id(db, user_id)

    db.delete(user)
    db.commit()

    return {"msg": "User deleted"}

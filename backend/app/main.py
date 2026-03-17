from fastapi import FastAPI
from app.core.firebase import db

app = FastAPI()

@app.get("/")
def read_root():
    return {"msg": "API jalan"}

@app.post("/users")
def create_user():
    db.collection("users").add({"name": "test"})
    return {"ok": True}

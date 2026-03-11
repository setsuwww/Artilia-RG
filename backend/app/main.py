from fastapi import FastAPI
from . import models, database, auth_controller

app = FastAPI(title="Artilia API")

# Create tables
models.Base.metadata.create_all(bind=database.engine)

# Include routes
app.include_router(auth_controller.router)

@app.get("/")
def root():
    return {"message": "Artilia FastAPI backend running"}

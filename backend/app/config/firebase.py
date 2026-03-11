import firebase_admin
from firebase_admin import credentials, firestore, storage
from .settings import settings

cred = credentials.Certificate(settings.firebase_credentials)
firebase_admin.initialize_app(cred, {
    "storageBucket": settings.firebase_storage_bucket
})

db = firestore.client()
bucket = storage.bucket()

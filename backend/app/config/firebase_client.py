import firebase_admin
from firebase_admin import credentials, firestore, storage

cred = credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred, {
    "storageBucket": "<project-id>.appspot.com"
})

db = firestore.client()
bucket = storage.bucket()

# Function save document -> firebase
def save_document(user_id: str, doc_type: str, content: str):
    doc_ref = db.collection("users").document(user_id).collection("documents").document()
    doc_ref.set({
        "type": doc_type,
        "content": content,
        "createdAt": firestore.SERVER_TIMESTAMP
    })

from app.core.firebase import db

def create_user(data: dict):
    doc_ref = db.collection("users").add(data)
    return {"id": doc_ref[1].id}

def get_all_users():
    docs = db.collection("users").stream()
    result = []

    for doc in docs:
        item = doc.to_dict()
        item["id"] = doc.id
        result.append(item)

    return result

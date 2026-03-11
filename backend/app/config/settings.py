from pydantic import BaseSettings

class Settings(BaseSettings):
    database_url: str
    secret_key: str
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 60
    firebase_credentials: str
    firebase_storage_bucket: str

    class Config:
        env_file = "../../.env"

settings = Settings()

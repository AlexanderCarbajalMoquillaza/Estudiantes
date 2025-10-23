from motor.motor_asyncio import AsyncIOMotorClient
import os

MONGO_URL = os.getenv("MONGO_URI", "mongodb://mongo:27017")
DB_NAME = os.getenv("MONGO_DB", "ztrack")

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

from dotenv import load_dotenv
import os


load_dotenv()

SECRET_DATABASE_KEY = os.getenv("DATABASE_KEY")
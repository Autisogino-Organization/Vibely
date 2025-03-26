from config import SECRET_DATABASE_KEY
from supabase import create_client
from utils.security import verify_password

SUPABASE_URL = "https://iqnyabathkjaqzqommeh.supabase.co"
SUPABASE_KEY = SECRET_DATABASE_KEY
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)



def login_user(user_email:str, password:str):
    response = supabase.table("users").select("email,hashed_password").eq("email", user_email).execute()
    if response.data:
        store_hashed = response.data[0]["hashed_password"]
        return verify_password(password,store_hashed)
    else:
        return False
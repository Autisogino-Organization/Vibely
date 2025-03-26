import config
from supabase import create_client

SUPABASE_URL = "https://iqnyabathkjaqzqommeh.supabase.co"
SUPABASE_KEY = config.SECRET_DATABASE_KEY
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)



response = supabase.table("users").select("*").execute()


print(response.data)
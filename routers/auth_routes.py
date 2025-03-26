from fastapi import APIRouter, Depends, HTTPException
from database.client import login_user

router = APIRouter(prefix="/auth",tags=["auth"])

@router.post("/auth/login",description="Login user with credentials")
async def login(email:str,password:str):
    confirmation = login_user(user_email=email,password=password)
    if confirmation:
      print(confirmation)
      raise  HTTPException(status_code=200,detail="OK")
    else:
       raise HTTPException(status_code=404, detail="Incorrect credentials")
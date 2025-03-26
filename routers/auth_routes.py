from fastapi import APIRouter, Depends, HTTPException
from utils.security import verify_password

router = APIRouter(prefix="/auth",tags=["auth"])

@router.post("/auth/login",description="Login user with credentials")
async def login(email:str,password:str):
    
